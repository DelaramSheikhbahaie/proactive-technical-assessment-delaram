//Characters
export interface PokemonCharactersType {
    name: string
    url: string
}
// Details
interface Language {
    name: string;
    url: string;
}

interface VersionGroup {
    name: string;
    url: string;
}

interface EffectEntry {
    effect: string;
    language: Language;
    short_effect?: string;
}

interface EffectChange {
    effect_entries: EffectEntry[];
    version_group: VersionGroup;
}

interface FlavorTextEntry {
    flavor_text: string;
    language: Language;
    version_group: VersionGroup;
}

interface Name {
    language: Language;
    name: string;
}

interface Pokemon {
    is_hidden: boolean;
    pokemon: {
        name: string;
        url: string;
    };
    slot: number;
}

export interface PokemonAbilityDetails {
    id: number;
    name: string;
    generation: {
        name: string;
        url: string;
    };
    is_main_series: boolean;
    effect_changes: EffectChange[];
    effect_entries: EffectEntry[];
    flavor_text_entries: FlavorTextEntry[];
    names: Name[];
    pokemon: Pokemon[];
}
