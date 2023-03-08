import { installQuasar } from "@quasar/quasar-app-extension-testing-unit-vitest";
import { mount } from "@vue/test-utils";
import { describe, expect, it, beforeEach } from "vitest";
import UserScore from "src/components/UserScore.vue";

import { setActivePinia, createPinia } from "pinia";
import { nextTick } from "vue";

installQuasar();

describe("tests mounting", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should render", () => {
    const wrapper = mount(UserScore);

    expect(wrapper.html()).toContain("Welcome");
  });
});

describe("tests score", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should show initial score", () => {
    const wrapper = mount(UserScore);

    expect(wrapper.html()).toContain("Score: 0");
  });

  it("should show score update", async () => {
    const wrapper = mount(UserScore);

    expect(wrapper.html()).toContain("Score: 0");

    wrapper.vm.tweenedNumber = 1;

    await nextTick();

    expect(wrapper.html()).toContain("Score: 1");
  });
});
