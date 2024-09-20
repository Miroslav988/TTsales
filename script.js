const APIToken = "2b94f5de8dff0aaea7c7d4c3c4b7ee085d75f46d";
const CompanyDomain = "prikolistiiko-sandbox";
const URL = `https:const${CompanyDomain}.pipedrive.com/api/v1/deals?api_token=${APIToken}`;
console.log(URL);
fetch(URL)
  .then((res) => res.json())
  .then((res) => console.log(res.data));
const JobID = "8c8329b474cc42dfbc3e00ff4bcf1d5c0d81a714";
const JobNumber = "5d4d6ed4c352075de74566c865be79658cae17e0";
const JobComment = "d9a830e836b5b61b75bb89f973d3b1763821ccc8";
const JobEndTime = "e8b9406e746f982f19c104765754e712245902c8";
const JobStartTime = "a17809c73cda165defa4926aea5acbafedef636a";
const JobDate = "027cfd9c40bd64889b81c36cc99946dc962bb7ad";
const JobSourse = "4bc6bcf974bd0b07c759b2a563fef840cd5a1202";
const JobType = "d5fce0e2a2992f64a54705e58dd77f35ef53e8b3";
const Address = "4557dbb158367c9c66d5a3ad64fbcec7352cacd4";
