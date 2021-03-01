

import express from "express";
import { burgersService } from "../services/BurgersService";
import BaseController from "../utils/BaseController";


export class BurgersController extends BaseController {
    constructor() {
        super("api/burgers");
        this.router
            .get("", this.getAll)
            .post("", this.create)
            .delete("/:id", this.delete)
            .put("/:id", this.edit)
    }
    async edit(req, res, next) {
        try {
            let editedBurger = req.body
            const burger = burgersService.edit(editedBurger, req.params.id)
            res.send(burger)
        } catch (error) {

        }
    }
    async delete(req, res, next) {
        try {
            const id = req.params.id
            const burger = burgersService.delete(id)
            res.send(burger)
        } catch (error) {
            next(error)
        }
    }
    async getAll(req, res, next) {
        try {
            const burgers = burgersService.getAll()
            res.send(burgers)
        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            let newBurger = req.body
            let burger = burgersService.create(newBurger)
            res.send(burger);
        } catch (error) {
            next(error);
        }
    }
}