module.exports = input => {
  const lines = input.split('\n')

  const gained = 'gained'
  const exp = 'experience points.'

  const gainedExperiencePoints = s => s.indexOf(gained) > -1 && s.indexOf(exp) > -1
  const splitWhiteSpace = s => s.split(' ')

  const lineToObject = (line) => {
    const gainedIndex = line.indexOf(gained)
    const experienceIndex = line.indexOf(exp)

    const time = line[0]
    const charName = line.slice(1, gainedIndex).join(' ')
    const expGained = Number(line.slice(gainedIndex + 1, experienceIndex - 1)[0])

    return {
      time,
      charName,
      expGained
    }
  }

  const transformInObjects = (list, experienceLine) => {
    list.push(lineToObject(experienceLine))
    return list
  }

  const byExpGained = (a, b) => {
    return b.expGained - a.expGained
  }

  return lines
    .filter(gainedExperiencePoints)
    .map(splitWhiteSpace)
    .reduce(transformInObjects, [])
    .sort(byExpGained)
}
