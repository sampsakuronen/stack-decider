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

const techsByFirstLetter = groupBy(techs, 0)

function groupBy(xs, key) {
  return xs.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}

function decideStack(acronym) {
  const acronymArray = acronym.split("")
  const stack = acronymArray.reduce((accu, character) => {
    const suitableTechs = techsByFirstLetter[character]
    if (suitableTechs === undefined) {
      return accu.concat("NO IDEA")
    }
    const randomTech = suitableTechs.sort((a, b) => 0.5 - Math.random())[0]
    return accu.concat(randomTech)
  }, [])

  return stack
}

console.log(decideStack("REAKTOR"))
console.log(decideStack("LOL"))
console.log(decideStack("GRAND"))
console.log(decideStack("LAMP"))
console.log(decideStack("MEGA"))
console.log(decideStack("MEAN"))
console.log(decideStack("MACHINE"))
console.log(decideStack("FOO"))
console.log(decideStack("BAR"))
