import projectResolver from "./project.resolver.js";
import userResolver from "./users.resolver.js";
import advanceResolver from "./advances.resolver.js";
import inscriptionResolver from "./inscriptions.resolver.js";

const { projectQueries, projectMutations, ...ProjectRest} = projectResolver;
const { userQueries, userMutations, ...UserRest} = userResolver;
const { advanceQueries, advanceMutations, ...AdvanceRest} = advanceResolver;
const { inscriptionQueries, inscriptionMutations, ...InscriptionRest} = inscriptionResolver;

export default{
    Query:{
        ...projectQueries,
        ...userQueries,
        ...advanceQueries,
        ...inscriptionQueries
    },
    Mutation:{
        ...projectMutations,
        ...userMutations,
        ...advanceMutations,
        ...inscriptionMutations,
    },
    ...ProjectRest,
    ...UserRest,
    ...AdvanceRest,
    ...InscriptionRest
};
