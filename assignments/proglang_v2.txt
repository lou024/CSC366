% file: prolang_v2.pro
% language(L) means that L is a language

language(smalltalk).
language(lisp).
language(prolog).
language(snobol).
language(apl).

% essence(L, DT, CF) means the language L features datatype DT
% and computational formalism CF

essence(smalltalk, object, 'message passing').
essence(lisp, list, 'recursive functions').
essence(prolog, relation, 'logical inferencing').
essence(snobol, pattern, 'string processing').
essence(apl, matrix, 'matrix operations').

% history(L, inventor(I), date(D)) means language L was invented
% by I in year D

history(smalltalk, inventor('Alan Kay'), date(1980)).
history(lisp, inventor('John McCarthy'), date(1959)).
history(prolog, inventor('Alan Colmeraur'), date(1971)).
history(snobol, inventor('Ralph Griswold (among others)'), date(1962)).
history(apl, inventor('Kenneth Iverson'), date(1964)).
