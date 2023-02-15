import { WebPartContext } from "@microsoft/sp-webpart-base";

// import pnp and pnp logging system
import {GraphFI, graphfi, DefaultHeaders} from "@pnp/graph";

import "@pnp/graph/users";




// eslint-disable-next-line no-var
var _sp: GraphFI = null;

export const getSP = (context?: WebPartContext): GraphFI  => {
    
  if (context != null) { // eslint-disable-line eqeqeq
    //You must add the @pnp/logging package to include the PnPLogging behavior it is no longer a peer dependency
    // The LogLevel set's at what level a message will be written to the console
    _sp = graphfi().using(context);
  }
  return _sp;
};



