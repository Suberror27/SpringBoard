function displayInitials(user) {
    let firstNameLetter = user.firstName[0].toUpperCase();
    let lastNameLetter = user.lastName[0].toUpperCase();

    return `Hello ${firstNameLetter}. ${lastNameLetter}`;
};

function test() {
    const data = {
        firstName: "Abraham",
        lastName: "Camargo",
    };

    try {
       console.log(displayInitials(data));
    } catch (error) {
        console.log("Error was found when invoking displayInitials function", error);
    } finally {
        // console.log("Error was handled gracefully!");
    };

};

test();