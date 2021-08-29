// main.js

function useSkillIfAble(skillName) {
	if(!is_on_cooldown(skillName)) {
		use_skill(skillName);
	}
}

function replenishHpMp() {
    if (character.hp < character.max_hp) {
        useSkillIfAble("regen_hp");
    }
    if (character.mp < character.max_mp) {
        useSkillIfAble("regen_mp");
    }
}

function main() {
    if (character.rip) return;

    replenishHpMp();

    loot();

    if(readyToFight()) autoFight(selectTarget());
}
