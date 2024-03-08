import sys
import math

def distance(r1, r2):
  return math.sqrt((r2.x - r1.x)**2 + (r2.y - r1.y)**2)

class busInfo:
  def __init__(self, busId, lineId, x, y, time):
    self.busId = busId
    self.lineId = lineId
    self.x = x
    self.y = y
    self.time = time

def loadAllRecords(fileName):
  records = []
  with open(fileName) as f:
    for line in f:
      busId, lineId, x, y, time = line.split()
      r = busInfo(
        busId, 
        lineId, 
        int(x),
        int(y), 
        int(time))
      records.append(r)
  return records
   
def computeTotalDistance(list, busId):
  busRecords = sorted([i for i in list if i.busId == busId], key = lambda x: x.t)
  if len(busRecords) == 0:
    return None, None
  totDist = 0.0
  for prev_record, curr_record in zip(busRecords[:-1], busRecords[1:]):
    totDist += distance(prev_record, curr_record)
  totTime = busRecords[-1].t - busRecords[0].t
  return totDist, totTime

#def computeAverage(list, lineId):
#  lineRecords = [i for i in list if i.lineId == lineId]






if __name__ == "__main__":
  flag = sys.argv[2]
  parameter = sys.argv[3]
  records = loadAllRecords(sys.argv[1])
  if(flag == '-b'):
    computeTotalDistance(records, parameter)
  #else: computeAverage(records, parameter)

