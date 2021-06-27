import React from 'react';
import Video from "../Sections/Video/Video";
import Photo from "../Sections/Photo/Photo";
import Contacts from "../Sections/Contacts/Contacts";
import Faq from "../Sections/Faq/Faq";
import Events from "../Sections/Events/Events";
import Catalog from "../Sections/Catalog/Catalog";

const Main = () => {
    return (
        <main>
            <Video />
            <Photo />
            <Catalog />
            <Faq />
            <Events />
            <Contacts />
        </main>
    );
};

export default Main;