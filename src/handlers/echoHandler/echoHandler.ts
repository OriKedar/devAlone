import { Request, Response } from "express";

/**
 * 
 * @route GET / 
 * 
 */
// export const hello = (req: request, res: response) => {
//     res.send("hello"); 
// };

export const hello = (req: Request, res: Response) => {
    res.render("home", {
        title: "Home"
    });
};