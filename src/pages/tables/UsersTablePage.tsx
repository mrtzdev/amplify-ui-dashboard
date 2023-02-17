import React from "react";
import { View, Heading, ScrollView } from "@aws-amplify/ui-react";
import UsersTable from "./UsersTable";

// const demoUsers = [{ name: "hello" }, { name: "hello" }];

const dataUsers = [
  {
    id: 1,
    first_name: "Wilona",
    last_name: "Mowen",
    email: "wmowen0@weather.com",
    phone: "530-817-1524",
    job_title: "Graphic Designer",
    image: "https://i.pravatar.cc/50?img=1",
  },
  {
    id: 2,
    first_name: "Arthur",
    last_name: "Berick",
    email: "aberick1@is.gd",
    phone: "998-787-6939",
    job_title: "Director of Sales",
    image: "https://i.pravatar.cc/50?img=2",
  },
  {
    id: 3,
    first_name: "Julian",
    last_name: "Brose",
    email: "jbrose2@who.int",
    phone: "930-219-6525",
    job_title: "Clinical Specialist",
    image: "https://i.pravatar.cc/50?img=3",
  },
  {
    id: 4,
    first_name: "Tarra",
    last_name: "Woodward",
    email: "twoodward3@sourceforge.net",
    phone: "432-728-0227",
    job_title: "Staff Scientist",
    image: "https://i.pravatar.cc/50?img=4",
  },
  {
    id: 5,
    first_name: "Odele",
    last_name: "Brealey",
    email: "obrealey4@so-net.ne.jp",
    phone: "367-522-6193",
    job_title: "Assistant Manager",
    image: "https://i.pravatar.cc/50?img=5",
  },
  {
    id: 6,
    first_name: "Candie",
    last_name: "Anmore",
    email: "canmore5@engadget.com",
    phone: "743-641-8451",
    job_title: "Sales Representative",
    image: "https://i.pravatar.cc/50?img=22",
  },
  {
    id: 7,
    first_name: "Abagael",
    last_name: "Spacie",
    email: "aspacie6@techcrunch.com",
    phone: "820-465-2418",
    job_title: "Clinical Specialist",
    image: "https://i.pravatar.cc/50?img=24",
  },
  {
    id: 8,
    first_name: "Ignaz",
    last_name: "Wickson",
    email: "iwickson7@last.fm",
    phone: "978-612-5609",
    job_title: "Health Coach IV",
    image: "https://i.pravatar.cc/50?img=14",
  },
  {
    id: 9,
    first_name: "Cordie",
    last_name: "Mordin",
    email: "cmordin8@wufoo.com",
    phone: "599-742-5873",
    job_title: "Environmental Specialist",
    image: "https://i.pravatar.cc/50?img=29",
  },
  {
    id: 10,
    first_name: "Jami",
    last_name: "Dozdill",
    email: "jdozdill9@sciencedaily.com",
    phone: "284-561-2794",
    job_title: "Information Systems Manager",
    image: "https://i.pravatar.cc/50?img=23",
  },
  {
    id: 11,
    first_name: "Nappie",
    last_name: "Bangham",
    email: "nbanghama@princeton.edu",
    phone: "234-779-2370",
    job_title: "Compensation Analyst",
    image: "https://i.pravatar.cc/50?img=12",
  },
  {
    id: 12,
    first_name: "Cicily",
    last_name: "Belin",
    email: "cbelinb@theglobeandmail.com",
    phone: "899-779-4150",
    job_title: "VP Product Management",
    image: "https://i.pravatar.cc/50?img=7",
  },
  {
    id: 13,
    first_name: "Porter",
    last_name: "Bevis",
    email: "pbevisc@reference.com",
    phone: "750-995-4896",
    job_title: "Web Developer III",
    image: "https://i.pravatar.cc/50?img=11",
  },
  {
    id: 14,
    first_name: "Birgitta",
    last_name: "Eckley",
    email: "beckleyd@youtube.com",
    phone: "318-594-1882",
    job_title: "VP Sales",
    image: "https://i.pravatar.cc/50?img=15",
  },
  {
    id: 15,
    first_name: "Lita",
    last_name: "Fieldsend",
    email: "lfieldsende@narod.ru",
    phone: "918-585-6058",
    job_title: "Senior Sales Associate",
    image: "https://i.pravatar.cc/50?img=17",
  },
];

const Tables = () => {
  return (
    <>
      <div>
        <h2>Tables</h2>
      </div>

      <View
        backgroundColor="var(--amplify-colors-white)"
        borderRadius="6px"
        maxWidth="100%"
        padding="1rem"
        minHeight="80vh"
      >
        <Heading> User Table </Heading>
        <br></br>
        <ScrollView width="100%">
          <UsersTable users={dataUsers} />
        </ScrollView>
      </View>
    </>
  );
};

export default Tables;
