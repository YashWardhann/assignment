import path from "path";
import User from "../models/User.model.js";
import UserInteger from "./../models/UserInteger.model.js";
import GenerateToken from "./../services/GenerateToken.js";

export const auth = async (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ status: 400, message: "Incomplete credentials" });
    }

    try {
        // Check if email exists 
        const docs = await User.find({
            email: req.body.email
        });

        if (docs.length !== 0) {
            throw new Error("Email already exists.");
        }

        // Create a new API key 
        const token = GenerateToken(req.body.email);
       
        const userData = await User.create({
            email: req.body.email, 
            password: req.body.password,
            api_key: token
        });

        // Create the default integer for the user
        const integerData = await UserInteger.create({
            api_key: userData.api_key
        });

        return res.status(201).json({
            status: 201, 
            data: userData
        });

    } catch (e) {
        console.error(e);
        return res.status(400).json({status: 400, message: `${e.message}`});
    }
}

export const next = async (req, res) => {
    try {
        if (!req.token) {
            throw new Error("API key not set");
        }

        const userData = await UserInteger.findOneAndUpdate(
            { api_key: req.token }, 
            { $inc: { integer: 1 } },
            { new: true },
        );  

        return res.status(201).json({status: 201, data: userData});
    } catch (e) {
        console.error(e);
        return res.status(400).send(e.message);
    }
}

export const fetch = async (req, res) => {
    try {
        if (!req.token) {
            throw new Error("API key not sent");
        } 

        const data = await UserInteger.find({
            api_key: req.token
        });

        if (data.length === 0) {
            throw new Error("No entries found");
        }

        return res.status(200).json(data[0]);
    } catch (e) {
        console.error(e);
        return res.status(400).send(e);
    }
}

export const reset = async (req, res) => {
    try {
        if (!req.token) {
            throw new Error("API key not set");
        } else if (!req.body.current) {
            throw new Error("Reset value not mentioned");
        } else if (req.body.current < 0) {
            throw new Error("The value must be non negative!");
        }

        const data = await UserInteger.findOneAndUpdate(
            { api_key: req.token }, 
            { integer: req.body.current },
            { new: true }
        );

        return res.status(201).json({
            status: 201, 
            data: data
        });
    } catch (e) {
        console.error(e);
        return res.status(400).json({status: 400, error: e.message});
    }
}