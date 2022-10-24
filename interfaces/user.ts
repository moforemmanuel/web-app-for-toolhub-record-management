interface IUser {
  username: string;
  firstName: string;
  lastName?: string;
  age?: number,
  contributions_count?: number;
  edited_tools?: number;
  profile_picture?: string;

}

export type {IUser};

// The Dashboard is required
//  to show the following metrics 
//  with mock figures (feel free to add
//    other analytics you think may be 
//    useful to monitor): Total number 
//    of Tools in the records, number of
//     tools with missing information, 
//     percentage of tools with missing
//      information compared with the total 
//      number of tools in the records, 
//      number of tools edited using this
//       record management tool