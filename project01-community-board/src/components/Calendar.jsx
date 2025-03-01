import React from "react";
import Game from "./Game";

const Calendar = () => {
  
    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="dates">
                        <td>23</td> <td>24</td> <td>25</td> <td>26</td> <td>27</td> <td>28</td> <td>1</td>                      
                    </tr>
                    <tr className="events">
                        <td></td> <td></td> <td><Game game='Frag Party' location='Science Building' image='frag.jpg' color='purple' /></td> <td></td> <td></td> <td><Game game='Boss Monster' location='Student Union' image='boss-monster.jpg' color='blue' /></td> <td></td>
                    </tr>
                    <tr className="dates">
                        <td>2</td> <td>3</td> <td>4</td> <td>5</td> <td>6</td> <td>7</td> <td>8</td>
                    </tr>
                    <tr className="events">
                        <td></td> <td><Game game='Betrayal at Hill House' location='After Hours' image='betrayal-house.jpg' color='red' /></td> <td></td> <td></td> <td><Game game='Carcassonne' location='Student Union' image='carcassonne.jpg' color='brown' /></td> <td></td> <td></td>
                    </tr>
                    <tr className="dates">
                        <td>9</td> <td>10</td> <td>11</td> <td>12</td> <td>13</td> <td>14</td> <td>15</td>
                    </tr>
                    <tr className="events">
                        <td><Game game='Ultimate Werewolf' location='Science Building' image='werewolf.jpg' color='darkgrey' /></td> <td></td> <td></td> <td><Game game='Mysterium Dinner Party' location='After Hours' image='mysterium.jpg' color='green' /></td> <td></td> <td></td> <td></td>
                    </tr>
                    <tr className="dates">
                        <td>16</td> <td>17</td> <td>18</td> <td>19</td> <td>20</td> <td>21</td> <td>22</td>
                    </tr>
                    <tr className="events">
                        <td></td> <td><Game game='Coffee & Catan' location='Student Union' image='catan.jpg' color='purple' /></td> <td></td> <td></td> <td></td> <td><Game game='Pandemic' location='Science Building' image='pandemic.jpg' color='red' /></td> <td></td>
                    </tr>
                    <tr className="dates">
                        <td>23</td> <td>24</td> <td>25</td> <td>26</td> <td>27</td> <td>28</td> <td>29</td>
                    </tr>
                    <tr className="events">
                        <td></td> <td></td> <td><Game game='Eldritch Horror' location='After Hours' image='eldritch-horror.jpg' color='blue' /></td> <td></td> <td><Game game='Shadow Hunters' location='Student Union' image='shadow-hunters.jpg' color='darkgrey' /></td> <td></td> <td></td>
                    </tr>
                    <tr className="dates">
                        <td>30</td> <td>31</td> <td>1</td> <td>2</td> <td>3</td> <td>4</td> <td>5</td>
                    </tr>
                    <tr className="events">
                        <td></td> <td></td> <td></td> <td><Game game='D&D One Shots' location='After Hours' image='dnd.jpg' color='green' /></td> <td></td> <td></td> <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Calendar;