from tennis_game import TennisGame
import unittest

class TestTennisGame(unittest.TestCase):

    def test_Score_ZeroToZero(self):
        '''simple example to start you off'''
        match = TennisGame()
        self.assertEqual("love - love", match.score())
    
    def test_OneToZero(self):
    	#1 - 0 -> 15 - love
        match = TennisGame()
        match.playerOneScored()
        self.assertEqual("15 - love",match.score())

    def test_OneToOne(self):
    	#1 - 1 -> 15 all
    	match = TennisGame()
    	match.playerOneScored()
    	match.playerTwoScored()
    	self.assertEqual("15 all", match.score())

    def test_OneToThree(self):
    	#1 - 3 -> 15 - 45
    	match = TennisGame()
    	match.playerOneScored()
    	for i in range(3): match.playerTwoScored()
    	self.assertEqual("15 - 45",match.score())

    def test_ThreeToThree(self):
    	#3 - 3 -> deuce
    	match = TennisGame()
    	for i in range(3): match.playerOneScored()
    	for i in range(3): match.playerTwoScored()
    	self.assertEqual("deuce",match.score())

    def test_FiveToFive(self):
    	#5 - 5 -> deuce
    	match = TennisGame()
    	for i in range(5): match.playerOneScored()
    	for i in range(5): match.playerTwoScored()
    	self.assertEqual("deuce",match.score())

    def test_SixToFive(self):
    	#6 - 5 -> advantage player 1
    	match = TennisGame()
    	for i in range(6): match.playerOneScored()
    	for i in range(5): match.playerTwoScored()
    	self.assertEqual("advantage player 1",match.score())

    def test_SixToSeven(self):
    	#6 - 7 -> advantage player 2
    	match = TennisGame()
    	for i in range(6): match.playerOneScored()
    	for i in range(7): match.playerTwoScored()
    	self.assertEqual("advantage player 2",match.score())

    def test_EightToSix(self):
    	#8 - 6 -> player 1 won
    	match = TennisGame()
    	for i in range(8): match.playerOneScored()
    	for i in range(6): match.playerTwoScored()
    	self.assertEqual("player 1 won",match.score())

    def test_ThreeToFive(self):
    	#3 - 5 -> player 2 won
    	match = TennisGame()
    	for i in range(3): match.playerOneScored()
    	for i in range(5): match.playerTwoScored()
    	self.assertEqual("player 2 won",match.score())
    	
if __name__ == '__main__':
    unittest.main()

