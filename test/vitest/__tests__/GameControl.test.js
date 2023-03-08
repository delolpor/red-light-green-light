import { installQuasar } from "@quasar/quasar-app-extension-testing-unit-vitest";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import GameControl from "src/components/GameControl.vue";

installQuasar();

describe("tests mounting", () => {
  it("should render", () => {
    const wrapper = mount(GameControl);

    expect(wrapper.html()).toContain("button");
  });

  it("should render reversed", () => {
    const wrapper = mount(GameControl, {
      props: {
        isReversed: true,
      },
    });

    expect(wrapper.html()).toContain("is-reversed");
  });
});

describe("tests button click", () => {
  it("should emit event", () => {
    const wrapper = mount(GameControl, {
      props: {
        isReversed: true,
      },
    });

    wrapper.find("button").trigger("click");

    expect(wrapper.emitted()).toHaveProperty("step-taken");
  });
});
