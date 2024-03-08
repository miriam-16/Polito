import sys

def computeAvgScore(scores):
  return sum(sorted(scores)[1:-1])

class Competitor:
  def __init__(self, name, surname, country, scores):
    self.name = name
    self.surname = surname
    self.country = country
    self.scores = scores
    self.avg_score = computeAvgScore(self.scores)


if __name__ == "__main__":

  list_competitors = []
  best_country_score = {}
  with open(sys.argv[1]) as f:
    for line in f:
      name, surname, country = line.split()[0:3]
      scores = line.split()[3:]
      scores = [float(i) for i in scores]
      comp = Competitor(
        name,
        surname,
        country, 
        scores)
      list_competitors.append(comp)
      if len(list_competitors) >= 4:
        list_competitors = sorted(list_competitors, key = lambda i: i.avg_score)[::-1][0:3]
      if comp.country not in best_country_score:
        best_country_score[comp.country] = 0
      best_country_score[comp.country] += comp.avg_score

  if len(best_country_score) == 0:
    print('No competitors')
    sys.exit(0)

  best_country = None
  for count in best_country_score:
    if best_country is None or best_country_score[count] > best_country_score[best_country]:
      best_country = count  

  print('Final ranking: ')
  for pos, comp in enumerate(list_competitors):
    print('%d: %s %s - Score: %.1f' % (pos+1, comp.name, comp.surname, comp.avg_score))
  print()
  print('Best country: ')
  print('%s - Total score: %.1f' % (best_country, best_country_score[best_country]))