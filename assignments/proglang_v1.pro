% file: prolang_v1.pro
% language(L) means that L is a language

language(smalltalk).
language(lisp).
language(prolog).

% essence(L, DT, CF) means the language L features datatype DT
% and computational formalism CF

essence(smalltalk, object, 'message passing').
essence(lisp, list, 'relative functions').
essence(prolog, relation, 'logical inferencing').

% history(L, inventor(I), date(D)) means language L was invented
% by I in year D

history(smalltalk, inventor('Alan Kay'), date(1980)).
history(lisp, inventor('John McCarthy'), date(1959)).
history(prolog, inventor('Alan Colmeraur'), date(1971)).
