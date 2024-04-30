import React from "react";
import NormMatrixInput from "../components/NormMatrixInput";
import ProbMatrixInput from "../components/ProbMatrixInput";
import IteratedEliminationMatrixInput from "../components/IteratedEliminationMatrixInput";
import GameMatrixInput from '../components/GameMatrixInput'
import creditSuisseGraph from "../Credit_Suisse.png"

export default function SimulationPage() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-8">
          <h3 style={{ textDecoration: "underline" }}>Prisoner's Dilemma</h3>
          <p>
            {" "}
            One of the most famous game in Game Theory is the Prisoner's
            dilemma. The game starts with the scenario that 2 prisoners
            committing a crime together are now given the same options: confess
            to the crime or stay silent. Confessing to crime reduces their own
            sentencing but increases the sentence of their partner in crime.
          </p>

          <p>
            For the sake of simulation, we can suppose that if both prisoners
            confess to their crime, both will have a payoff of 3, 3 years of
            reduced sentence. If both remains silent, each will have a payoff of
            1. If either one confesses while the other remains silent, the one
            who confesses will have payoff of 5 and the one who remained silent
            will have a payoff of 0.
          </p>

          <p>
            The matrix for this dilemma has already been prefilled. You can
            click on the "Calculate Nash Equilibrium" button to see what the
            Nash Equilibrium is. The resulting Nash Equilibrium is clearly not
            Pareto Efficient because (3, 3) would be the best solution. That is,
            both confesses to their crime. However, both prisoners would remain
            silent and deviate from the most efficient outcome. From a game's
            perspective, this shows dilemma showed a very interesting result
            being that Nash Equilibrium doesn't necessarily guarantee the best
            outcome in a game.{" "}
          </p>

          <p>
            As an extension, this showed a characteristic of non-cooperative
            game. Because each person chose to maximize their own benefit, there
            is a conflict between choosing the best outcome for an individual
            versus choosing the best outcome for the group as a whole.
          </p>
        </div>
        <div className="col-4">
          <NormMatrixInput />
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col-8">
          <h3 style={{ textDecoration: "underline" }}>Matching Pennies</h3>
          <p>
            So far, we've introduced the concept of nash equilibrium through
            prisoner's dilemma which has an unique, discrete Nash Equilibrium.
            However, a game could potentially have no single discrete Nash
            Equilibrium. Take for example the Matching Pennies game.
          </p>
          <p>
            In the Matching Pennies game, 2 players, each holds a penny. 
            One player is assigned a role 'even' and another player is assigned a 
            role 'odd'. Each player can determine which side of the coin to 
            show and then simultaneously reveal their side of the coin. If both 
            pennies are head or tail, then player 1 wins with a payoff of 1 and 
            player 2 loses with a payoff of -1. Conversely, if there is only 1 head 
            and 1 tail, player 1 loses with payoff of -1 and player 2 wins with a 
            payoff of 1.
          </p>
          <p>
            The matrix has already been prefilled. By running 'Pure Strategy Nash 
            Equilibrium', you can check that there is no deterministic strategy where 
            a steady state result is reached. I.e., no nash equilibrium exists. This is 
            where we turn to Mixed Strategy Nash Equilibrium. 
          </p>
          <p>
            In Mixed Strategy Nash Equilibrium (MSNE), we want to modify each player's 
            strategy from a deterministic model to a stochastic model, i.e. a probability 
            distribution over the choices that a player could make. Objective-wise, each 
            player still wants to maximize their expected profit. To model a stochastic model, 
            each player will then selected the probability that would maximize their expected 
            gains. 
          </p>
          <p>
            In practice, each player considers what their opponent would do and calculates for 
            the probability of each choice. For example, player 1 considers the cases when 
            player 2 either shows head or tail. 
          </p>
          <p>
            If player 2 chooses head, then player 1 could either choose head or tail, 
            and the weighted gain of player 1 condition on player 2 choosing head (<i>p</i>) 
            would be: (1)<i>p</i> + (-1)(1-<i>p</i>).
             
          </p>
          <p>
            If player 2 chooses tail, then the weighted gain of player 1 condition on 
            player 2 choosing tail would be: -1<i>p</i> + (1)(1-<i>p</i>).
          </p>
          <p>
            To solve for <i>p</i>, we have (1)<i>p</i> + (-1)(1-<i>p</i>) =  -1<i>p</i> + (1)(1-<i>p</i>) 
            which gets <i>p</i> = <sup>1</sup>⁄<sub>2</sub>.
          </p>
          <p>
            In a MSNE, the equilibrium exists when player 1 chooses between 
            head or tail with the same probability (since we have obtained 
            head, then choosing tail = 1 - head =  1<i> - p</i> = 
            1 - <sup>1</sup>⁄<sub>2</sub> ).
          </p>
        </div>
        <div className="col-4">
          <ProbMatrixInput />
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col-8">
            <h3 style={{ textDecoration: "underline" }}>Iterative Elimination of Dominated Strategies</h3>
            <p>
                When finding Nash Equilibrium, the assumption that all 
                players aim to maximize their gains gives us an extremely 
                useful too in reducing the game state. Given two different 
                strategies, if a strategy is dominant, then the 
                player would definitely use that strategy since there 
                this unilaterally gets the player a better result over the 
                other. That is, we can effective remove the dominated strategy 
                from consideration because the player would never choose that 
                strategy to begin with.
            </p>

            <p>
                While performing iterative elimination, there are 2 variants that 
                could be carried out for elimination. We can choose to remove only 
                Strongly Dominated strategies or remove Weakly Dominated strategies. 
                However, keep in mind that removing Weakly Dominated strategies does 
                not guarantee that all Nash Equilibra can be found. 
            </p>

            <p>
                For demonstration, look at the output difference between IESDS 
                (Strongly Dominated Elimination) and IEDS 
                (Strongly & Weakly Dominated Elimination) on the 0 payoff matrix.
            </p>

            <p>
                Any of the 4 states qualifies as an Equilibrium state but because of 
                the relaxed constraint on the weakly dominated strategy, the resulting 
                set of game states may change and result in finding only the subset over 
                the entire set of Nash Equilibria.
            </p>
        </div>
        <div className="col-4">
            <IteratedEliminationMatrixInput />
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col-8">
            <h3 style={{ textDecoration: "underline" }}>Credit Suisse Purchase</h3>
            <p>
                In the final section, we will take a look at the application of Game Theory in 
                the purchase of Credit Suisse by UBS. 
            </p>
            <hr />
            <h5>Background: </h5>
            <p>
                UBS and Credit Suisse 
                are the largest and the 2nd largest bank in Switzerland. Following the bank 
                rush incident of Silicon Valley Bank, the 16th largest bank in U.S. in 
                March 2023, the world has been highly sensitive to fluctuations in the banking 
                system. Around this period of tension, Bloomsberg journalist interviewed 
                the president of Saudi National Bank, which is the largest shareholder of 
                Credit Suisse whether he will be providing additional funding to Credit Suisse. </p>
            <p>
            Ammar Al Khudairy's reponses, "The answer is absolutely not", sparked panic and led to 
            a government commanded emergency buyout of Credit Suisse over 2 days of negotiation on 
            the purchase price of Credit Suisse. Since the stock price reflects the pricing of 
            Credit Suisse, we will be using the stock price of Credit Suisse as a proxy in the game.
            </p>
            <p>The follow is the stock price of Credit Suisse:</p>
            <div style={{ textAlign: 'center' }}>
                <img src={creditSuisseGraph} alt="Credit Suisse Graph" style={{ width: '100%', maxWidth: '600px' }} />
            </div>
                <hr />
            <h5>Objectives: </h5>
            <p>Credit Suisse: Sell at price close to market price. Valued at approximately 2.</p>
            <p>UBS: Buy at price as low as possible. Initial valued price at approximately 0.25.</p>
            <p>Government: Close purchase as soon as possible. Subsidized purchase up to valued price of Credit Suisse.</p>
            <p>Middle Ground: Buy at price approximately average at 0.80.</p>
            <hr />
            <h5>Game:</h5>
            <ul>
                <li> 
                    Government requires that Credit Suisse opens a price to be purchased, regardless 
                    of whether Credit Suisse negotiates on the price or not. So however much Credit 
                    Suisse could sell for, that would be the profit gains. 
                </li>
                <li>
                    If UBS refuses to negotiate on price, the buy price will exactly equal to the 
                    value that UBS evaluates Credit Suisse for, which is 0.25. However, UBS gains 
                    no additional profit by buying at 0.25 since that is the worth of Credit Suisse so 
                    payoff is 0.25 - 0.25 = 0. 
                </li>
                <li>
                    If UBS is willing to negotiate on price, then the government will subsidize additional 
                    cost to speeds up the buy out process. The government would be willing to pay up to the 
                    difference between middle ground, negotiation price and evaluated price. 
                </li>
            </ul>
            <p>The payoff matrix would then be: (UBS, Credit Suisse)</p>
            <ul>
                <li>
                    (negotiate, negotiate): (0.80 - 0.25, 0.80)
                </li>
                <li>
                    (negotiate, no negotiate): (0.80 - 0.25, 0.80)
                </li>
                <li>
                    (no negotiate, negotiate): (0.25 - 0.25, 0.25)
                </li><li>
                    (no negotiate, no negotiate): (0.25 - 0.25, 0.25)
                </li>
            </ul>
            <hr />
            <h5>Result: </h5>
            <p>
                From the resulting game, the Nash Equilibria maintains that the buy out price of 
                Credit Suisse will be at 0.80 of which, the gain from buy out of UBS would be the 
                government subsidy at 0.55, and the gain of Credit Suisse at the buy price 0..80
            </p>
        </div>
        <div className="col-4">
            <GameMatrixInput />
        </div>
      </div>
    </div>
  );
}
