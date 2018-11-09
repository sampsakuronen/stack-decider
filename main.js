const techs = [
  "Angular",
  "React",
  "Nodejs",
  "Express",
  "Postgres",
  "MySQL",
  "MongoDB",
  "Neo4js database",
  "Apache",
  "Kafka",
  "Cassandra",
  "GraphQL",
  "db2",
  "Cordova",
  "Phonegap"
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

console.log(decideStack("GRAND"))
console.log(decideStack("LAMP"))
console.log(decideStack("MEGA"))
console.log(decideStack("MEAN"))
console.log(decideStack("MACHINE"))
console.log(decideStack("FOO"))
console.log(decideStack("BAR"))
