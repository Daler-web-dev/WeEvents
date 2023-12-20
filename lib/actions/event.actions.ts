"use server";

import { CreateEventParams } from "@/types";
import { handleError } from "../utils";
import { connectToDatabase } from "../database";
import User from "../database/models/user.model";
import Event from "../database/models/event.model";

export const createEvent = async ({
	event,
	userId,
	path,
}: CreateEventParams) => {
	try {
		await connectToDatabase();

		const orginizer = await User.findById(userId);

		if (!orginizer) {
			throw new Error("Orginizer not found");
		}

		const newEvent = await Event.create({
			...event,
			category: event.categoryId,
			orginizer: userId,
		});

        return JSON.parse(JSON.stringify(newEvent))

	} catch (error) {
		handleError(error);
	}
};
