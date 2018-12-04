import { UserInput } from './user-input.model';  
import { InteractionTypeGroup } from './interaction-type-group.model'; 



export class InteractionResponse {
     nlmDisclaimer: string;
     userInput: UserInput;
     interactionTypeGroup: InteractionTypeGroup[];
 }
