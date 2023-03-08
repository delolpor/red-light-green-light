import { installQuasar } from "@quasar/quasar-app-extension-testing-unit-vitest";
import { mount } from "@vue/test-utils";
import { describe, expect, it, beforeEach } from "vitest";
import HomeView from "src/pages/HomeView.vue";

import { setActivePinia, createPinia } from "pinia";

installQuasar();

describe("tests mounting", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should render", () => {
    const wrapper = mount(HomeView);

    expect(wrapper.html()).toContain("Create new player");
  });
});
