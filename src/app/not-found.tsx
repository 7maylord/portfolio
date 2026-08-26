import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container">
      <div className="page-title">
        <div className="eyebrow">Error 404 · Off the survey grid</div>
        <h1>This station isn’t on the log.</h1>
        <p className="muted">
          The page you’re after may have moved, or was never surveyed.
        </p>
        <div className="actions">
          <Link className="button primary" href="/">
            <ArrowLeft size={16} /> Return to the surface
          </Link>
          <Link className="button" href="/work">
            Open the borehole log <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <div
        className="titleblock"
        style={{ maxWidth: 640, marginBottom: "6rem" }}
      >
        <div className="tb">
          <div className="k">Sheet</div>
          <div className="v">— / —</div>
        </div>
        <div className="tb">
          <div className="k">Depth</div>
          <div className="v">Unknown</div>
        </div>
        <div className="tb">
          <div className="k">Stratum</div>
          <div className="v">Void</div>
        </div>
        <div className="tb">
          <div className="k">Status</div>
          <div className="v">Not found</div>
        </div>
      </div>
    </section>
  );
}
