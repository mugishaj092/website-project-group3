const contactInfo = {
    title: 'Imprint',
    description: 'Agentur Baumeister',
    info: {
        address1: "Katrein Baumeister",
        address2: "Böckhstraße 13",
        address3:"10967 Berlin",
    },
    contact: {
        phoneNumber: "+49 (0)30 - 490 827 87",
        email: "hallo@agentur-baumeister.com",
    },
    secondAddress: {
        name: "UST-IDNR.",
        address: "DE 274 486 923",
    },
    office: {
        name: "REGISTERED OFFICE",
        address: "Charlottenburg",
    },
    office: {
        name: "REGISTERED OFFICE",
        address:"Berlin, Deutschland"
    }

}


const DISCLAIMER = {
    title: "DISCLAIMER",
    content: "Despite all due care, no liability can be accepted for the accuracy, completeness and up to-dateness of the information provided. The same applies to third-party websites to which www.agentur-baumeister.com refers by means of hyperlinks. Katrein Baumeister, Agentur Baumeister accepts no liability for the content of these websites."
};

function selectContactBody() {
    return document.getElementById('contact-body');
}

function populateContactData() {
    console.log('Populating contact data...');
    const contactBody = selectContactBody();
    if (contactBody) {
        contactBody.innerHTML = `
            <div class="flex flex-col gap-10 max-sm:gap-5 text-lg md:text-md lg:text-3xl">
                <div>
                    <h1 class="text-2xl font-medium">${contactInfo.title}</h1>
                    <h2 class="font-bold">${contactInfo.description}</h2>
                    <div class="flex flex-col">
                        <span>${contactInfo.info.address1}</span>
                        <span>${contactInfo.info.address2}</span>
                        <span>${contactInfo.info.address3}</span>
                    </div>
                </div>
                <div class="flex flex-col">
                    <span>${contactInfo.contact.phoneNumber}</span>
                    <span>${contactInfo.contact.email}</span>
                </div>
                <div class="flex-col">
                    <h2 class="font-bold">${contactInfo.secondAddress.name}</h2>
                    <span>${contactInfo.secondAddress.address}</span>
                </div>
                <div class="flex-col">
                    <h2 class="font-bold">${contactInfo.office.name}</h2>
                    <span>${contactInfo.office.address}</span>
                </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-[30%] text-right max-sm:text-left max-sm:mt-10 flex flex-col gap-5 md:gap-10">
                <h1 class="text-2xl font-semibold">${DISCLAIMER.title}</h1>
                <p class="text-md md:text-xl">${DISCLAIMER.content}</p>
            </div>
        `;
        console.log('Contact data populated from contactInfo');
    }
}


setTimeout(() => {
    populateContactData();
}, 300);
