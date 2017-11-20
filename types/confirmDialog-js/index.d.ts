// Type definitions for jquery-confirm v3.3.0 https://craftpip.github.io/jquery-confirm/
// Project: https://github.com/allipierre/Type-definitions-for-jquery-confirm/tree/master/types/confirmDialog-js
// Definitions by: Alli Pierre Yotti https://github.com/allipierre
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface JQueryStatic {
  /**
   * confirm Dialog
   * @param {confirmOptions} pOtions
   */
   confirm( pOtions: options.confirmOptions): boolean | void;

  /**
   * confirm alert
   * @param {any} pMessage
   */
   alert( pMessage?: any):  void;

  /**
   * confirm Dialog
   * @param {any} pMessage
   */
   dialog( pOtions: options.confirmOptions):  void;
}


interface JQuery {
  /**
   * confirm Dialog
   * @param {confirmOptions} pOtions
   */
   confirm( pOtions: options.confirmOptions): boolean | void;

  /**
   * confirm alert
   * @param {any} pMessage
   */
   alert( pMessage?: any):  void;

  /**
   * confirm Dialog
   * @param {any} pMessage
   */
   dialog( pOtions: options.confirmOptions):  void;
}

declare namespace options {

    interface confirmOptions {
            buttons? : buttonOptionss | any,
            title? : string,
            content?  : string,
            onContentReady?:Function
    }

    interface buttonOptionss {
            cancel? : Function,
            confirm? : Function
    }

}
