import { colors } from './colors.js'

export const nodes = [];

export const links = [];

const MAIN_NODE_SIZE = 50
const CHILD_NODE_SIZE = 20
const LEAVE_NODE_SIZE = 5
const LINK_DEFAULT_DISTANCE = 30
const LINK_LEAVE_DISTANCE = 10
export const MANY_BODY_STRENGTH = -30


let i = 0;
const addMainNode = (node) => {
    node.size = MAIN_NODE_SIZE;
    node.color = colors[i++][2]
    nodes.push(node);
}

const addChildNode = (parent, node, size = CHILD_NODE_SIZE, distance = LINK_DEFAULT_DISTANCE) => {
    node.size = size;
    node.color = parent.color;
    nodes.push(node);
    links.push({source: parent, target: node, distance: distance}); 
}

const assembleChildNode = (parentNode, id) => {
    const childNode = {id};
    addChildNode(parentNode, childNode);
    for ( let i = 0; i < 20; i++)
        addChildNode(childNode, {id:''}, LEAVE_NODE_SIZE, LINK_LEAVE_DISTANCE)
}

const connectMainNodes = (source, target) => {
    links.push({source, target, distance: LINK_DEFAULT_DISTANCE}); 
}


const ArtsWebNode =  {id: 'Arts Web'};

addMainNode(ArtsWebNode);
assembleChildNode(ArtsWebNode, 'Community Vision');
assembleChildNode(ArtsWebNode, 'Silicon Valley Creates');

const SocialImpactCommonsNode = {id: 'Social Impact Commons'}

addMainNode(SocialImpactCommonsNode);
assembleChildNode(SocialImpactCommonsNode, 'Threatre Bay Area');
assembleChildNode(SocialImpactCommonsNode, 'EastSise Arts Alliance');
assembleChildNode(SocialImpactCommonsNode, 'Local Coldor');

connectMainNodes(ArtsWebNode,SocialImpactCommonsNode );


