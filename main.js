const techs = [
  "Apollo",
  "Angular",
  "Apache",
  "AWS",
  "Backbone",
  "bacon.js",
  "bluebird",
  "C++",
  "DynamoDB",
  "Kibana",
  "ElasticSearch",
  "Lua",
  "Clojure",
  "Lambda",
  "Firebase",
  "Grails",
  "Grafana",
  "CORBA",
  "Glassfish",
  "Golang",
  "Hibernate",
  "Haskell",
  "Elm",
  "Hypervisor",
  "Docker",
  "Kubernetes",
  "Java",
  "OCaml",
  "OpenStack",
  "Perl",
  "QuickBasic",
  "Silverlight",
  "Vue",
  "Terraform",
  "React",
  "Ruby on Rails",
  "Nodejs",
  "Express",
  "Elixir",
  "Idris",
  "PostgreSQL",
  "Linux",
  "MySQL",
  "MongoDB",
  "MariaDB",
  "Neo4js database",
  "Kafka",
  "Cassandra",
  "GraphQL",
  "db2",
  "Cordova",
  "Phonegap",
  "PHP",
  "Tensorflow",
  "Keras",
  "Caffe",
  "Spark",
  "Mesos",
  "Kinesis",
  "Scala",
  "Play framework",
  "Django",
  "Nginx",
  "Zookeeper",
  "Protobuf",
  "Hadoop"
]

function techsByFirstLetter() {
  return techs.reduce((rv, x) => {
    (rv[x[0].toUpperCase()] = rv[x[0].toUpperCase()] || []).push(x);
    return rv;
  }, {});
}

function decideStack(acronym) {
  const acronymArray = acronym.split('')
  const stack = acronymArray.reduce((accu, character) => {
    const suitableTechs = techsByFirstLetter()[character.toUpperCase()]
    if (suitableTechs === undefined) {
      return accu.concat('NO IDEA')
    }
    const randomTech = suitableTechs.sort((a, b) => 0.5 - Math.random())[0]
    return accu.concat(randomTech)
  }, [])

  return stack
}

function showStack() {
  const input = document.querySelector('input[name=acronym]')
  const stackElement = document.getElementById('stack')
  stackElement.innerHTML = decideStack(input.value).map((x) => `${x}<br>`).join('')
}

function ready(fn) {
  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function init() {
  const input = document.querySelector('input[name=acronym]')
  input.addEventListener('keyup', showStack)
}

ready(init)
