import { IRouteConfig } from "../interfaces/routeConfig.interface";
import { IComponentRouter } from "../interfaces/component.router.interface";
export declare class StrategicRouter implements IComponentRouter {
    private _webComponentRouter;
    private _angularElementComponentRouter;
    private _customComponentRouter;
    constructor();
    Mount($root: HTMLElement, routeConfig: IRouteConfig): void;
    Unmount($root: HTMLElement, routeConfig: IRouteConfig): void;
}
