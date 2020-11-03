%------------------------------------------------------------------------------
% File: dotspeak_r.pro
% Type: Prolog source
% Line: Recognizer for the Dotspeak language
% Date: Touched 2020
% ------------------------------------------------------------------------------

% ------------------------------------------------------------------------------
% libraries

:- consult('../libraries/io/io.pro').
% -------------------------------------------------------------------------- % DCG for the Dotspeak language
sentence --> command,[.].
sentence --> question,[?].

question --> existentialquestion.
question --> countquestion.
question --> contentquestion.

command --> displaycommand.
command --> addcommand.
command --> deletecommand.
command --> movecommand.
command --> [stop].

existentialquestion --> [is], [there], nsdot.
existentialquestion --> [is], [there], nsdot, [on], [the], [table].
existentialquestion --> [is], [there], nsdot, [not], [on], [the], [table].

existentialquestion --> [is], [there], csdot.
existentialquestion --> [is], [there], csdot, [on], [the], [table].
existentialquestion --> [is], [there], csdot, [not], [on], [the], [table].
existentialquestion --> [is], [there], csdot, [to], [the], [left], [of], csdot.
existentialquestion --> [is], [there], csdot, [to], [the], [right], [of], csdot.

countquestion --> countdots, [in], [column], columnid.
countquestion --> countdots, [in], [the], [world].
countquestion --> countdots, [on], [the], [table].
countquestion --> countdots, [off], [the], [table].

countquestion --> countcolordots, [in], [column], columnid.
countquestion --> countcolordots, [in], [the], [world].
countquestion --> countspaces, [in], [column], columnid.
countquestion --> countspaces, [in], [the], [world].

contentquestion --> [is], [column], columnid, [empty].
contentquestion --> [is], [column], columnid, [full].
contentquestion --> [is], [the], [world], [empty].
contentquestion --> [is], [the], [world], [full].

displaycommand --> [list], [the], [dots].
displaycommand --> [list], [the], color, [dots].
displaycommand --> [list], [the], [dots], [in], [column], columnid.
displaycommand --> [list], [the], [dots], [on], [the], [table].
displaycommand --> [list], [the], [dots], [off], [the], [table].

addcommand --> [add], nsdot.
addcommand --> [add], csdot.
addcommand --> [add], nsdot, [to], [column], columnid.
addcommand --> [add], csdot, [to], [column], columnid.
addcommand --> [fill], [column], columnid.
addcommand --> [fill], [the], [world].
addcommand --> [sprinkle], xdigits, [dots], [onto], [the], [world].

deletecommand --> [remove], nsdot.
deletecommand --> [remove], nsdot, [from], [column], columnid.
deletecommand --> [clear], [the], [world].

movecommand --> [move], nsdot, [from], [column], columnid, [to], [column], columnid.

countdots --> [how], [many], [dots].
countcolordots --> [how], [many], color, [dots].
countspaces --> [how], [many], [spaces], [available].

nsdot --> [a], [dot].
csdot --> detcolor, [dot].

detcolor --> [an], [orange].
detcolor --> [a], nonorange.

nonorange --> [blue].
nonorange --> [yellow].
nonorange --> [red].
nonorange --> [green].
nonorange --> [purple].

color --> [orange].
color --> [blue].
color --> [yellow].
color --> [red].
color --> [green].
color --> [purple].

columnid --> [1].
columnid --> [one].
columnid --> [2].
columnid --> [two].
columnid --> [3].
columnid--> [three].
columnid --> [4].
columnid --> [four].
columnid --> [5].
columnid --> [five].
columnid --> [6].
columnid --> [six].
columnid --> [7].
columnid --> [seven].
columnid --> [8].
columnid --> [eight].

xdigits --> [2].
xdigits --> [two].
xdigits --> [3].
xdigits --> [three].
xdigits --> [4].
xdigits --> [four].
xdigits --> [5].
xdigits --> [five].
xdigits --> [6].
xdigits --> [six].
xdigits --> [7].
xdigits --> [seven].
xdigits --> [8].
xdigits --> [eight].
xdigits --> [9].
xdigits --> [nine].

% -------------------------------------------------------------------------- % Recognizer -- and interface to the DCG!
recognizer :- read_sentence(S), sentence(S,[]), recognizer.
recognizer :- write('Error ...'),nl, recognizer.
