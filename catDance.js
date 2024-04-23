import { CatDanceModel } from "./model.js";
import { CatDanceController } from "./controller.js";
import { CatDanceView } from "./view.js";

let catdance_model = new CatDanceModel();
let catdance_controller = new CatDanceController(catdance_model);
let catdance_view = new CatDanceView(catdance_model, catdance_controller);
