import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1666611866763",
  root: "1666563528449",
  nodes: {
    perspectiveCamera1: "1666563528449",
    "perspectiveCamera1/events1": "1666563528449",
    raymarchedObject: "1666563528449",
    "raymarchedObject/MAT": "1666563528449",
    "raymarchedObject/MAT/rayMarchingBuilder1": "1666611866763",
    COP: "1666563798630",
  },
  shaders: {
    "/raymarchedObject/MAT/rayMarchingBuilder1": {
      vertex: "1666563798630",
      fragment: "1666563798630",
      "customDepthMaterial.vertex": "1666563798630",
      "customDepthMaterial.fragment": "1666563798630",
      "customDistanceMaterial.vertex": "1666563798630",
      "customDistanceMaterial.fragment": "1666563798630",
    },
  },
};

export const loadSceneData_scene_01 = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "scene_01",
    urlPrefix: sceneDataRoot + "/scene_01",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};
