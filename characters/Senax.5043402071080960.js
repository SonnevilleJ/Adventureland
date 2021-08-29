load_code("main");
load_code("fight");
load_code("log");

CurrentLogLevel = LogLevels.Warn;

setInterval(main, 250);
logTrace(character.name + " main loop started");

// Write your own CODE: https://github.com/kaansoral/adventureland
// character.items.find(i => i.name = "hpot0").q
// smart_move(find_npc("basics"));
