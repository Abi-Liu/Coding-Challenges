
// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Your function also receives a third argument, a string, with the name of the fighter that attacks first.

function declareWinner(fighter1, fighter2, firstAttacker) {
  let hits1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
  let hits2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
  if (hits1 > hits2) {
    return fighter1.name;
  } else if (hits2 > hits1) {
    return fighter2.name;
  } else {
    return firstAttacker;
  }
}