const { Destination } = require("../models/destination.model");

const createDestination = async (data) => {
    console.log('service: createDestination');
    const destination = await Destination.create(data);
    return destination;
}

const getAllDestinations = async () => {
    console.log('service: getAllDestinations');
    const destinations = await Destination.find();
    return destinations;
}

const getDestinationById = async (id) => {
    console.log('service: getDestinationById');
    const destination = await Destination.findById(id);
    return destination;
}

const deleteDestinationById = async (id) => {
    console.log('service: deleteDestinationById');
    const destination = await Destination.findByIdAndDelete(id);
    return destination;
}

const getDestinationByIdAndUpdate = async (id, data) => {
    console.log('service: getDestinationByIdAndUpdate');
    const destination = await Destination.findByIdAndUpdate(id, data, {
        // Re-run validations.
        runValidators: true,
        // Return the updated destination.
        new: true
    });
    return destination;
}

const createManyDestinations = async (documents) => {
    // Don't await inside a loop, it will delay iteration.
    const createPromises = documents.map((document) =>
        createDestination(document)
    );
    // The one resulting promise will be awaited by the caller of this function.
    return Promise.allSettled(createPromises);
};

module.exports = {
    createDestination: createDestination,
    getAllDestinations,
    getDestinationById,
    deleteDestinationById,
    getDestinationByIdAndUpdate,
    createManyDestinations
};