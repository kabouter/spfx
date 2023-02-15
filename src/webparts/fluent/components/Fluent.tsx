import * as React from 'react';
import { IFluentProps } from './IFluentProps';
//import { Web } from "@pnp/sp/webs";




import { getSP } from "../pnpjsConfig";
import "@pnp/graph/users";



export default class Fluent extends React.Component<IFluentProps,{}> {

 


  constructor(props: IFluentProps) {
    super(props);
    // set initial state
    
    
  }




public componentDidMount(): void {
  // read all file sizes from Documents library
  this.printCurrentUser();
}


public render(): JSX.Element {  
  return <h1></h1>
  
}


private printCurrentUser = async (): Promise<void> => {
 
    // do PnP JS query, some notes:
    //   - .expand() method will retrive Item.File item but only Length property
    //   - .get() always returns a promise
    //   - await resolves proimises making your code act syncronous, ergo Promise<IResponseItem[]> becomes IResponse[]

    //Extending our sp object to include caching behavior, this modification will add caching to the sp object itself
    //this._sp.using(Caching("session"));

    //Creating a new sp object to include caching behavior. This way our original object is unchanged.
    try {
      const currentUser = await getSP.me();
      console.log(`current User: ${currentUser}`);
    } catch (error) {
      
    }
    

    
    // Add the items to the state
    
 
}
}