class TennisGame:
    def __init__(self):
        """
        This is the constructor for the TennisGame class. 
        You may need to write code here such as declaring some fields 
        to help with making your tests pass.
        """
        self.playerOneScore = 0
        self.playerTwoScore = 0

    def score(self):
        if self.playerOneScore == self.playerTwoScore and self.playerOneScore > 2: return "deuce"
        if (self.playerOneScore - self.playerTwoScore) >= 2 and self.playerOneScore > 3: return "player 1 won"
        if (self.playerTwoScore - self.playerOneScore) >= 2 and self.playerTwoScore > 3: return "player 2 won" 

        score = ""
        if self.playerOneScore == 0: score += "love"
        elif self.playerOneScore == 1: score += "15"
        elif self.playerOneScore == 2: score += "30"
        elif self.playerOneScore == 3: score += "45"
        elif self.playerOneScore > self.playerTwoScore: return "advantage player 1"

        if self.playerOneScore == self.playerTwoScore and self.playerOneScore > 0: return score + " all"

        score += " - "
        
        if self.playerTwoScore == 0: score += "love"
        elif self.playerTwoScore == 1: score += "15"
        elif self.playerTwoScore == 2: score += "30"
        elif self.playerTwoScore == 3: score += "45"
        elif self.playerTwoScore > self.playerOneScore: return "advantage player 2"

        return score
        

    def playerOneScored(self):
        self.playerOneScore += 1

    def playerTwoScored(self):
       self.playerTwoScore += 1

    """
    It should not be necessary to create any other methods to complete the assignment.
    If you feel like creating some helper methods you are welcome to.
    """
