import redirect from "../api-ref-redirect";

it(`api-ref-redirect`, () => {
  expect(
    redirect({
      hash: "#poptarts",
    })
  ).toEqual(undefined);

  expect(
    redirect({
      hash: "#map",
    })
  ).toEqual("/unl-map-js-docs/api/map/#map");

  expect(
    redirect({
      hash: "#map#scrollzoom",
    })
  ).toEqual("/unl-map-js-docs/api/map/#map#scrollzoom");

  expect(
    redirect({
      hash: "#map.event:mouseover",
    })
  ).toEqual("/unl-map-js-docs/api/map/#map.event:mouseover");

  expect(
    redirect({
      hash: "#lnglat",
    })
  ).toEqual("/unl-map-js-docs/api/geography/#lnglat");

  expect(
    redirect({
      hash: "#icontrol",
    })
  ).toEqual("/unl-map-js-docs/api/markers/#icontrol");

  expect(
    redirect({
      hash: "#icontrol#getdefaultposition",
    })
  ).toEqual("/unl-map-js-docs/api/markers/#icontrol#getdefaultposition");

  expect(
    redirect({
      hash: "#touchpitchhandler#isenabled",
    })
  ).toEqual("/unl-map-js-docs/api/handlers/#touchpitchhandler#isenabled");

  expect(
    redirect({
      hash: "#canvassource#getcanvas",
    })
  ).toEqual("/unl-map-js-docs/api/sources/#canvassource#getcanvas");

  expect(
    redirect({
      hash: "#mapwheelevent",
    })
  ).toEqual("/unl-map-js-docs/api/events/#mapwheelevent");

  expect(
    redirect({
      hash: "#mapwheelevent#type",
    })
  ).toEqual("/unl-map-js-docs/api/events/#mapwheelevent#type");

  expect(
    redirect({
      hash: "#clearprewarmedresources",
    })
  ).toEqual("/unl-map-js-docs/api/properties/#clearprewarmedresources");
});
