import { CatDanceModel } from "./model";
import { CatDanceController } from "./controller";
import { CatDanceView } from "./view";

let catdance_model = new CatDanceModel();
let catdance_controller = new CatDanceController(catdance_model);
let catdance_view = new CatDanceModel(catdance_model, catdance_controller);
catdance_controller.connectView(catdance_view); // I don't think I actually need this based on what KMP is saying, the controller doesn't really need to know about the view? We'll see. 
