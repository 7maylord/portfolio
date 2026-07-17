"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// The signature interaction: a surveyor's reticle that tracks the cursor, casts
// dimension lines to the sheet edges with live station readouts, and logs
// coordinates + elevation in a title-block HUD. Pure decoration layered over the
// site — every element is aria-hidden and pointer-events:none, so the page stays
// fully usable with JS off, on touch, and with reduced motion.
export function SurveyLayer() {
  const pathname = usePathname();

  // Re-scan scroll-reveal targets on every route change, and refresh the depth
  // gauge for the new page (the persistent effect below owns the scroll math).
  useEffect(() => {
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            revealObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 },
    );
    document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));
    dispatchEvent(new Event("scroll"));
    return () => revealObs.disconnect();
  }, [pathname]);

  useEffect(() => {
    const root = document.documentElement;
    const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Depth gauge + HUD elevation track scroll (all devices).
    const gaugeCursor = document.getElementById("gaugeCursor");
    const hudElev = document.getElementById("hudElev");
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0;
      if (gaugeCursor) gaugeCursor.style.top = 14 + p * 72 + "vh";
      if (hudElev) hudElev.textContent = "-" + (p * 12).toFixed(3) + " m";
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (!fine) {
      return () => {
        removeEventListener("scroll", onScroll);
      };
    }

    // Fine pointer: enable the reticle + dimensioning.
    document.body.classList.add("fine");
    document.getElementById("survey")?.classList.add("live");
    document.getElementById("hud")?.classList.add("live");

    const readE = document.getElementById("readE");
    const readN = document.getElementById("readN");
    const hudStation = document.getElementById("hudStation");
    const hudBearing = document.getElementById("hudBearing");
    const reticleTag = document.getElementById("reticleTag");

    let tx = innerWidth / 2;
    let ty = innerHeight / 2;
    let cx = tx;
    let cy = ty;
    let running = false;

    const pad = (n: number, w: number) => {
      let s = Math.round(n).toString();
      while (s.length < w) s = "0" + s;
      return s;
    };

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!running) {
        running = true;
        requestAnimationFrame(loop);
      }
    };

    const loop = () => {
      const ease = reduced ? 1 : 0.18;
      cx += (tx - cx) * ease;
      cy += (ty - cy) * ease;

      root.style.setProperty("--mx", cx + "px");
      root.style.setProperty("--my", cy + "px");

      const eVal = (cx / innerWidth) * 200;
      const nVal = ((innerHeight - cy) / innerHeight) * 200;
      if (readE) readE.textContent = "E " + eVal.toFixed(1);
      if (readN) readN.textContent = "N " + nVal.toFixed(1);
      if (hudStation)
        hudStation.textContent = "E" + pad(eVal, 3) + " N" + pad(nVal, 3);

      const dx = cx - innerWidth / 2;
      const dy = innerHeight / 2 - cy;
      const ang = Math.round(((Math.atan2(dx, dy) * 180) / Math.PI + 360) % 360);
      const rel = ang <= 180 ? ang : 360 - ang;
      if (hudBearing)
        hudBearing.textContent =
          (dy >= 0 ? "N " : "S ") + rel + "° " + (ang <= 180 ? "E" : "W");

      // Re-tag the reticle by the core sample under the cursor.
      if (reticleTag) {
        const el = document.elementFromPoint(cx, cy);
        const core = el?.closest<HTMLElement>("[data-sample]");
        reticleTag.textContent = core?.dataset.sample ?? "BH-01";
      }

      if (Math.abs(tx - cx) > 0.4 || Math.abs(ty - cy) > 0.4) {
        requestAnimationFrame(loop);
      } else {
        running = false;
      }
    };

    addEventListener("pointermove", onMove, { passive: true });
    loop();

    return () => {
      removeEventListener("pointermove", onMove);
      removeEventListener("scroll", onScroll);
      document.body.classList.remove("fine");
    };
  }, []);

  return (
    <>
      <div className="survey-layer" id="survey" aria-hidden="true">
        <div className="dim-h" />
        <div className="dim-v" />
        <div className="dim-read read-e" id="readE">
          E 000.0
        </div>
        <div className="dim-read read-n" id="readN">
          N 000.0
        </div>
        <div className="reticle" id="reticle">
          <div className="cross" />
          <div className="box" />
          <div className="dot" />
          <div className="tag" id="reticleTag">
            BH-01
          </div>
        </div>
      </div>

      <div className="hud" id="hud" aria-hidden="true">
        <div className="cell">STATION</div>
        <div className="cell">
          <b id="hudStation">E000 N000</b>
        </div>
        <div className="cell">ELEV.</div>
        <div className="cell">
          <b id="hudElev">0.000 m</b>
        </div>
        <div className="cell">BEARING</div>
        <div className="cell">
          <b id="hudBearing">N 0&deg; E</b>
        </div>
        <div className="cell">STATE</div>
        <div className="cell rec">LOGGING</div>
      </div>

      <div className="gauge" aria-hidden="true">
        <div className="rail" />
        <div className="cursor" id="gaugeCursor" />
      </div>
    </>
  );
}
