const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count" : 10,
        "list": {
            "id_1": "Анна",
            "id_2": "Алена",
            "id_3": "Наталия",
            "id_4": "Анастасия",
            "id_5": "Мария",
            "id_6": "София",
            "id_7": "Елена",
            "id_8": "Ольга",
            "id_9": "Жанна",
            "id_10": "Елизавета"
        }
    }`,
    fatherNameMaleJson: `{
        "count" : 8,
        "list" : {
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Артемович",
            "id_5": "Дмитриевич",
            "id_6": "Никитович",
            "id_7": "Михаилович",
            "id_8": "Даниилович"
        }
    }`,
    fatherNameFemaleJson: `{
        "count" : 8,
        "list" : {
            "id_1": "Александровна",
            "id_2": "Максимовна",
            "id_3": "Ивановна",
            "id_4": "Артемовна",
            "id_5": "Дмитриеванв",
            "id_6": "Никитовна",
            "id_7": "Михаиловна",
            "id_8": "Данииловна"
        }
    }`,
    jobMaleJson: `{
        "count" : 6,
        "list" : {
            "id_1": "Пожарный",
            "id_2": "Водитель",
            "id_3": "Солдат",
            "id_4": "Сантехник",
            "id_5": "Програмист",
            "id_6": "Учитель"
        }
    }`,
    jobFemaleJson: `{
        "count" : 6,
        "list" : {
            "id_1": "Парикмахер",
            "id_2": "Учитель",
            "id_3": "Стилист",
            "id_4": "Дизайнер",
            "id_5": "Повар",
            "id_6": "Воспитатель"
        }
    }`,

    
    
     
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },


    randomFirstNameM: function() {
      
            return this.randomValue(this.firstNameMaleJson);

    },

    randomFirstNameF: function() {
      
        return this.randomValue(this.firstNameFemaleJson);

    },


    randomSurname: function() {
        
        return this.randomValue(this.surnameJson);

    },

    randomGod: function() {
        
            return Math.round(Math.random() * (2003 - 1986) + 1986)
          
    },

    randomFatherNameFemale: function() {

        return this.randomValue(this.fatherNameFemaleJson);
    },

    randomFatherNameMale: function() {

        return this.randomValue(this.fatherNameMaleJson);
    },

    randomJobMale: function() {

        return this.randomValue(this.jobMaleJson);
    },

    randomJobFemale: function() {

        return this.randomValue(this.jobFemaleJson);
    },


     

    


    getPerson: function () {
        
       

        let randomGender = Math.round(Math.random()) === 0 ? this.GENDER_FEMALE : this.GENDER_MALE;
        if (randomGender === this.GENDER_FEMALE) {
        this.person = {};
        this.person.gender = 'Женщина';
        this.person.firstName = this.randomFirstNameF();
        this.person.surName = this.randomSurname() + 'a';
        this.person.god = 'год рождения ' +  this.randomGod() + 'г.';
        this.person.father = this.randomFatherNameFemale(); 
        this.person.job  = this.randomJobFemale();
        return this.person;
    } else {
        this.person = {};
        this.person.gender = 'Мужчина';
        this.person.firstName = this.randomFirstNameM();
        this.person.surName = this.randomSurname();
        this.person.god = 'год рождения ' + this.randomGod() + 'г.';
        this.person.father = this.randomFatherNameMale(); 
        this.person.job  = this.randomJobMale();
        return this.person;
    }
    }
    

    

    

    
};