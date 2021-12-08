import { NextApiRequest, NextApiResponse } from "next";

import {services} from '../../data'
export default (req:NextApiRequest, res:NextApiResponse) => {
    console.log(services);
    
    // by default it is a get request
    // we also need a get request because we need to get the data from the server
    res.status(200).json({services})
}