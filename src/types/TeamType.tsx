
//
type Teamtype = {

id: number,
name: string,
role: string,
profile?: {
experience?: string,
department?: string,
techstack?: string[],
profilePicture?: string,
},

};

export default Teamtype;

//does profile need to be declared separetely??