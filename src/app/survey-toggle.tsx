"use client";

import { useSyncExternalStore } from "react";
import { Crosshair } from "lucide-react";

const subscribe = (cb: () => void) => {
  addEventListener("survey-change", cb);
  return () => removeEventListener("survey-change", cb);
};
const isOn = () => document.documentElement.dataset.survey === "on";

export function SurveyToggle() {
  const on = useSyncExternalStore(
    subscribe,
    isOn,
    () => false, // server: off by default
  );

  const toggle = () => {
    if (on) {
      document.documentElement.removeAttribute("data-survey");
      localStorage.setItem("survey", "off");
    } else {
      document.documentElement.dataset.survey = "on";
      localStorage.setItem("survey", "on");
    }
    dispatchEvent(new Event("survey-change"));
  };

  return (
    <button
      className="survey-toggle"
      type="button"
      aria-pressed={on}
      aria-label={`Survey mode ${on ? "on" : "off"} — toggle cursor reticle`}
      title={`Survey mode: ${on ? "on" : "off"}`}
      onClick={toggle}
    >
      <Crosshair size={16} />
    </button>
  );
}
