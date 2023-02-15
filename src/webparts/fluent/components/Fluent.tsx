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
 
    try {
      const currentUser = await getSP.me();
      console.log(`current User: ${currentUser}`);
    } catch (error) {
      
    }
 
}
}