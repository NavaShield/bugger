
Scene scenes = new Scene[19];// <- how come this works when I just write Scene scenes = new Scene[1]; ? No idea...
Scene currentScene;
int physicalScene;

String[] names1;
String[] adjectives1;
String[] nouns1;

void setup() {
  frameRate(40);
  initScenes();
  currentScene = scenes[0];
  physicalScene = 0;
  updateScreen();
  names1 = loadStrings("txt/names.txt");
  adjectives1 = loadStrings("txt/adjectives.txt");
  nouns1 = loadStrings("txt/nouns.txt");
  $("#retry").css("display", "none");
}

String currentText="";
String idealText="";
void draw() {
  if (currentText.length()<idealText.length()) currentText+=idealText.charAt(currentText.length());
  if (currentText.charAt(currentText.length()-1).equals("<")) {
    while (!currentText.charAt (currentText.length ()-1).equals(">")) {
      currentText+=idealText.charAt(currentText.length());
    }
  }
  $("#text").html(currentText);
  animate();
}

void updateScreen() {
  $("#picture").empty();
  for (int i=0;i<currentScene.picture.length;i++) {
    $("#picture").html($("#picture").html()+currentScene.picture[i]+"<br/>");
  }
  $("#interactions").empty();
  float charsSizeX = 6;
  float charsSizeY = 10.5;
  float offsetX = 6;
  float offsetY = -8;
  float marginDiag = 5;
  for (int actNb=0 ; actNb<currentScene.actions.size() ; actNb++) {
    $("#interactions").html($("#interactions").html()+"<span class=\"interact\" scene=\""+currentScene.id+"\" action=\""+actNb+"\" label=\""+currentScene.actions.get(actNb).label
      +"\" style=\"position:absolute; border-style:none; left:"+(currentScene.actions.get(actNb).x*charsSizeX+$("#picture").position().left+offsetX)
      +"px; top:"+(currentScene.actions.get(actNb).y*charsSizeY+$("#picture").position().top+offsetY)
      +"px; width:"+(currentScene.actions.get(actNb).w*charsSizeX+marginDiag)+"px; height:"+(currentScene.actions.get(actNb).h*charsSizeY+marginDiag)+"px; \"></span>");
  }
}

class Scene {
  int id;
  String[] picture;
  ArrayList<Action> actions = new ArrayList<Action>();
  Scene(String url, int id) {
    this.picture=loadStrings("txt/"+url);
    this.id=id;
  }
  void addAction(String label, int x, int y, int w, int h, int a) {
    actions.add(new Action(label, x, y, w, h, a));
  }
  void removeActions() {
    actions = new ArrayList<Action>();
  }
  void removeAction(String label) {
    for (int i=0;i<actions.size();i++) {
      if (actions.get(i).label.equals(label)) actions.remove(i);
    }
  }
}

String phoneNumber = "";
int employeesDead = 0;
int hypnosis=0;
int moneyOffered=0;
int lightOnOff=0;
int policemanFollow=0;
int dealerOnItsWay=0;
String currentWeapon = "gun";
int flickrTime=0;

class Action {
  String label;
  int x;
  int y;
  int w;
  int h;
  int a;
  Action(String label, int x, int y, int w, int h, int a) {
    this.label=label;
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    this.a=a;
  }

  void setChar(int x, int y, String t) {
    currentScene.picture[y-1] = currentScene.picture[y-1].substring(0, x-1) + t + currentScene.picture[y-1].substring((x-1)+t.length(), currentScene.picture[y-1].length());
    updateScreen();
  }

  void setChar(int x, int y, String t, int s) {
    scenes[s].picture[y-1] = scenes[s].picture[y-1].substring(0, x-1) + t + scenes[s].picture[y-1].substring((x-1)+t.length(), scenes[s].picture[y-1].length());
    updateScreen();
  }

  void switchWeaponTo(String weapon) {
    currentWeapon=weapon;
    String weaponChar = "r";
    if (currentWeapon.equals("torch")) weaponChar = "¥";
    if (currentWeapon.equals("big gun")) weaponChar = "R";
    setChar(26, 12, weaponChar, 4);
    setChar(52, 12, weaponChar, 10);
    setChar(17, 12, weaponChar, 11);
    setChar(20, 12, weaponChar, 12);
    setChar(26, 12, weaponChar, 13);
    setChar(16, 12, weaponChar, 15);
    setChar(44, 9, weaponChar, 16);
  }

  void act() {
    boolean renableTooltip = false;
    if (a==0) {
    }
    if (a==1) {
      updateText("you enter the bank");
      moveToScene(1);
    }
    if (a==2) {
      updateText("you have no reason to run yet");
    }
    if (a==3) {
      setChar(26, 12, "r");
      updateText("you : \"Hey, give me all the dollars please.\"<br/>bank employee : \"Sure, you can take them. But I'm going to have to call the police, sorry.\"");
      scenes[1].removeAction("point your gun <br/>at the employees");
      scenes[1].addAction("take the dollars", 42, 11, 11, 1, 4);
      updateScreen();
    }
    if (a==4) {
      updateText("The police is there.");
      moveToScene(2);
    }
    if (a==5) {
      updateText("policeman : \"Ok, I'll now count to ten. If your gun is still in your hand when I reach ten, I'll fire bullets at you and you'll probably die dead.\"");
      moveToScene(3);
    }
    if (a==6) {
      moveToScene(4);
    }
    if (a==7) {
      moveToScene(5);
    }
    if (a==8) {
      phoneNumber += label;
      updateText("You dial a number : "+phoneNumber);
      if (phoneNumber.length()>=5) {
        if (phoneNumber.equals("66602")) {
          updateText("Arm Dealer : \"Hello, Arm Dealer speaking, who are you ?\"");
          appendText("<br/>you : \"Hi, I'm some guy at the bank. I need a weapon. Can you deliver it right now ?\"");
          appendText("<br/>Arm Dealer : \"Sure, I'll be there in a moment.\"");
          dealerOnItsWay=1;
          moveToScene(4);
        }
        else {
          String thisName = names1[floor(random(names1.length()))];
          updateText(thisName+" : \"Hello, "+thisName+" speaking, who are you ?\"");
          int answer = floor(random(3));
          if (answer==0) appendText("<br/>you : \"My name is Robby. You don't know me but I'd like you to help me carry some great illegal activities.\"");
          if (answer==1) appendText("<br/>you : \"Hi, you don't know me but I'm in the process of stealing a lot of money right now and I need your help.\"");
          if (answer==2) appendText("<br/>you : \"Please Sir, I need your help. It will involve killing people and stealing dollars, but everything is going to be all right, trust me.\"");
          answer = floor(random(3));
          if (answer==0) appendText("<br/>"+thisName+" : \"Ah, sorry I'm not interested.\"");
          if (answer==1) appendText("<br/>"+thisName+" : \"Well, I'm a pretty legal person so... no.\"");
          if (answer==2) appendText("<br/>"+thisName+" : \"Please leave me out of this.\"");
          moveToScene(4);
        }
        phoneNumber="";
      }
      if (phoneNumber.equals("911")) {
        updateText("policeman : \"Oh, I get a call. I have to answer this.\"");
        appendText("<br/>policeman : \"Yes, who is it ?\"");
        appendText("<br/>you : \"There's somebody at the bank with a gun.\"");
        appendText("<br/>policeman : \"Ah, I know. I'm already there.\"");
        moveToScene(4);
        phoneNumber="";
      }
      countdownGoesOn();
    }
    if (a==9) {
      physicalScene = currentScene.id;
      moveToScene(19);
      updateText("what exactly are you targetting ?");
      countdownGoesOn();
    }
    if (a==10) {
      if (currentWeapon.equals("torch")) {
        updateText("With a torch ?");
        countdownGoesOn();
      }
      else {
        if (employeesDead==0) {
          setChar(40, 11, "                ");
          setChar(40, 12, "  ░░░     ░░░  ");
          setChar(40, 13, "-ß░░░     ░░░ß-");
          updateText("The employees both die dead.<br/>Policeman : \"But... there was no reason to do this! Never mind, you'll go to jail twice.\"");
          countdownGoesOn();
        }
        else {
          if (employeesDead<5) {
            updateText("You kill them even more dead. That feels quite good.");
            countdownGoesOn();
          }
          else {
            setChar(40, 13, "  ░░░     ░░░  ");
            updateText("They are really dead by now, it's ok.");
            countdownGoesOn();
          }
        }
        employeesDead++;
      }
    }
    if (a==11) {
      updateText("It's too high, you can't reach it.");
      countdownGoesOn();
    }
    if (a==12) {
      physicalScene = currentScene.id;
      moveToScene(6);
    }
    if (a==13) {
      if (hypnosis==0) {
        updateText("you : \"You know, I'll count to ten as well but when I reach ten you will fall in a deep relaxing sleep.\"<br/>policeman : \"Ok.\"");
        setChar(3, 10, "Go on with the hypnosis.", 6);
        moveToScene(physicalScene);
      }
      else {
        updateText("you : \""+ hypnosis +"\"");
        moveToScene(physicalScene);
      }
      if (hypnosis>10) {
        updateText("the policeman falls asleep");
        moveToScene(physicalScene);
      }
      hypnosis++;
      countdownGoesOn();
    }
    if (a==14) {
      int theNumber = floor(random(20));
      while (theNumber<=hypnosis+1) theNumber = floor(random(20));
      updateText("you : \""+ theNumber +"\"");
      if (hypnosis>0) {
        appendText("<br/>policeman : hey! You're skipping numbers, that's cheating ! Don't try to fool me.");
        hypnosis++;
      }
      moveToScene(physicalScene);
      countdownGoesOn();
    }
    if (a==15) {
      updateText("you turn off the light");
      moveToScene(7);
      lightOnOff++;
      countdownGoesOn();
    }
    if (a==16) {
      if (lightOnOff<6) {
        updateText("you turn on the light");
        moveToScene(4);
      }
      else {
        updateText("it seems that you broke the light, it won't turn on again");
      }
      lightOnOff++;
      countdownGoesOn();
    }
    if (a==17) {
      updateText("You drop the gun, go directly to jail and do not collect $200000.");
      $("#retry").css("display", "block");
      moveToScene(8);
    }
    if (a==18) {
      if (moneyOffered==0) {
        updateText("You give one of your money to the policeman.");
        setChar(27, 13, " ", 4);
        setChar(12, 13, "$", 4);
        moneyOffered++;
      }
      else if (moneyOffered==1) {
        updateText("You give another money to the policeman.");
        setChar(28, 13, " ", 4);
        setChar(13, 13, "$", 4);
        moneyOffered++;
      }
      else if (moneyOffered==2) {
        updateText("You don't have any money left.");
      }
      moveToScene(physicalScene);
      countdownGoesOn();
    }
    if (a==19) {
      updateText("You have some conversation with the policeman");
      moveToScene(physicalScene);
      countdownGoesOn();
    }
    if (a==20) {
      if (random(30)<1) {
        updateText("you : \"You are an ugly man !\"");
        appendText("<br/>policeman : \"Yes.\"");
      }
      else {
        updateText("you : \"You "+adjectives1[floor(random(adjectives1.length))]+" "+nouns1[floor(random(nouns1.length))]+" !\"");
      }
      moveToScene(physicalScene);
      countdownGoesOn();
    }
    if (a==21) {
      moveToScene(10);
      policemanFollower();
      countdownGoesOn();
    }
    if (a==22) {
      moveToScene(11);
      policemanFollower();
      countdownGoesOn();
    }
    if (a==23) {
      moveToScene(12);
      policemanFollower();
      countdownGoesOn();
    }
    if (a==24) {
      moveToScene(10);
      policemanFollower();
      countdownGoesOn();
    }
    if (a==25) {
      if (dealerOnItsWay==0) {
        moveToScene(13);
        policemanFollower();
        countdownGoesOn();
      } 
      else {
        updateText("It's closed. The dealer probably had to do a delivery somewhere.");
        countdownGoesOn();
      }
    }
    if (a==26) {
      physicalScene = currentScene.id;
      moveToScene(14);
    }
    if (a==27) {
      updateText("you : \"what's your phone number ?\"");
      appendText("<br/>merchant : \"It's 66602\"");
      moveToScene(physicalScene);
    }
    if (a==28) {
      moveToScene(15);
      updateText("you go to the safe room. <br/>the policeman is still looking at you from the other room.");      
      countdownGoesOn();
    }
    if (a==29) {
      updateText("you pull the ladder to the other room.");
      scenes[15].removeAction("pull the ladder");
      scenes[4].addAction("climb the ladder", 15, 8, 8, 6, 35);
      setChar(35, 7, "         ");
      setChar(35, 8, "         ");
      setChar(35, 9, "         ");
      setChar(35, 10, "         ");
      setChar(35, 11, "         ");
      setChar(35, 12, "         ");
      setChar(35, 13, "         ");
      setChar(15, 7, " __      ", 4);
      setChar(15, 8, "|\\_\\     ", 4);
      setChar(15, 9, "| \\_\\    ", 4);
      setChar(15, 10, "|-|\\_\\   ", 4);
      setChar(15, 11, "| | \\_\\  ", 4);
      setChar(15, 12, "|-|  \\_\\ ", 4);
      setChar(15, 13, "| |   \\_\\", 4);
      countdownGoesOn();
    }
    if (a==30) {
      setChar(30, 11, "  û", 4);
      setChar(30, 12, "¥¬Ô", 4);
      setChar(30, 13, "  |", 4);
      scenes[4].addAction("talk to the dealer", 31, 11, 2, 3, 31);
    }
    if (a==31) {
      updateText("Arm Dealer : \"Here is your weapon, I think it's some kind of torch.\"");
      appendText("<br/>you : \"Thanks.\"");
      appendText("<br/>Arm Dealer : \"Goodbye.\"");
      setChar(30, 11, "   ", 4);
      setChar(30, 12, "   ", 4);
      setChar(30, 13, "   ", 4);
      switchWeaponTo("torch");
      countdownGoesOn();
    }
    if (a==32) {
      updateText("You : \"I'd like to buy this torch.\"");
      appendText("<br/>Arm Dealer : \"Ok, it's yours.\"");
      switchWeaponTo("torch");
      countdownGoesOn();
      appendText("<br/>policeman : \"By the way, holding a torch instead of a gun still counts as a weapon to me.\"");
    }
    if (a==33) {
      updateText("You : \"I'd like to buy this fishing hook.\"");
      appendText("<br/>Arm Dealer : \"Oh sorry I can't let you buy it without a license.\"");
      countdownGoesOn();
    }
    if (a==34) {
      updateText("You : \"I'd like to buy this big gun.\"");
      appendText("<br/>Arm Dealer : \"Ok, it's yours.\"");
      switchWeaponTo("big gun");
      countdownGoesOn();
    }
    if (a==35) {
      updateText("you climb the ladder and are now close to the chandelier");
      moveToScene(16);
      countdownGoesOn();
    }
    if (a==36) {
      if (currentWeapon.equals("torch")) {
        updateText("burning the wire leaves a hole that reveals some secret entrance");
        moveToScene(17);
      }
      else {
        updateText("you need some kind of torch to burn it");
        countdownGoesOn();
      }
    }
    if (a==37) {
      updateText("you end up on the roof of the bank<br/>the policeman eventually leaves the bank<br/>you didn't get any money but the view is pretty cool up there, so that was probably worth it after all.<br/>(the end)");
      moveToScene(18);
    }
    if (a==38) {
      updateText("You : \"Can I buy something now and pay you later ? I've got a lot of money, I promise.\"<br/>Arm Dealer : \"Sure then. That's fine.\"");
      moveToScene(13);
      countdownGoesOn();
    }
    if (a==39) {
      updateText("You : \"I want your biggest gun.\"<br/>Arm Dealer : \"It's probably that one on the table, help yourself.\"");
      moveToScene(13);
      countdownGoesOn();
    }
    if (a==40) {
      int result = floor(random(100));
      if (currentWeapon.equals("big gun")) result = floor(random(15));
      if (result<5) {
        updateText("success ! The policeman dies.<br/>Another policeman arrives and go on with the countdown.");
        countdownGoesOn();
      } 
      else {
        updateText("you miss it");
      }
      moveToScene(physicalScene);
    }
    if (a==41) {
      updateText("you shoot somewhere and nothing special happens");
      moveToScene(physicalScene);
    }
    if (a==41) {
      updateText("that is you indeed");
    }
    if (a==42) {
      if (flickrTime>5) {
        if (random(100)<10) setChar(23, 13, "-_______-");
        else setChar(23, 13, "/¯¯¯¯¯¯¯\\");
        if (random(100)<10) setChar(17, 9, "___--¯¯      ¯¯--___");
        else setChar(17, 9, "^-_____      _____-^");
        flickrTime=0;
      }
      flickrTime++;
      renableTooltip = true;
    }
    if (a==43) {
      int type = floor(random(10));
      if (type==0) setChar(floor(random(62))+1, floor(random(6))+1, "▄");
      if (type==1) setChar(floor(random(62))+1, floor(random(6))+1, "▀");
      if (type==2) setChar(floor(random(62))+1, floor(random(6))+1, "■");
      setChar(floor(random(62))+1, floor(random(6))+1, "█");
    }    
    if (a!=0 && !renableTooltip) $("#tooltip").css("display", "none");
  }
}

void initScenes() {
  scenes[0] = new Scene("street.txt", 0);
  scenes[0].addAction("enter the bank", 31, 12, 2, 2, 1);
  scenes[0].addAction("run", 1, 14, 62, 3, 2);
  scenes[0].addAction("you", 8, 11, 3, 3, 42);
  scenes[1] = new Scene("bank.txt", 1);
  scenes[1].addAction("point your gun <br/>at the employees", 37, 11, 26, 3, 3);
  scenes[1].addAction("a door", 1, 10, 3, 4, 0);
  scenes[1].addAction("a chandelier", 7, 3, 7, 2, 0);
  scenes[1].addAction("a telephone", 37, 11, 1, 3, 0);
  scenes[1].addAction("a safe room", 58, 10, 4, 4, 0);
  scenes[2] = new Scene("bank2.txt", 2);
  scenes[2].addAction("listen to the policeman", 8, 10, 6, 4, 5);
  scenes[2].addAction("a door", 1, 10, 3, 4, 0);
  scenes[2].addAction("a chandelier", 7, 3, 7, 2, 0);
  scenes[2].addAction("a telephone", 37, 11, 1, 3, 0);
  scenes[2].addAction("a safe room", 58, 10, 4, 4, 0);
  scenes[3] = new Scene("policeHead.txt", 3);
  scenes[3].addAction("ok", 1, 1, 62, 16, 6);
  scenes[4] = new Scene("bank2.txt", 4);
  scenes[4].addAction("leave the bank", 1, 10, 3, 4, 21);
  scenes[4].addAction("shoot the policeman", 8, 10, 6, 4, 9);
  scenes[4].addAction("speak", 24, 11, 1, 1, 12);
  scenes[4].addAction("drop the gun", 26, 12, 1, 1, 17);
  scenes[4].addAction("the money", 27, 13, 2, 1, 0);
  scenes[4].addAction("burn the wire", 10, 3, 1, 2, 11);
  scenes[4].addAction("turn off the light", 7, 5, 7, 2, 15);
  scenes[4].addAction("use the phone", 37, 11, 1, 3, 7);
  scenes[4].addAction("kill the employees", 39, 11, 16, 3, 10);
  scenes[4].addAction("go to the safe room", 58, 10, 4, 4, 28);
  scenes[5] = new Scene("phone.txt", 5);
  scenes[5].addAction("0", 13, 2, 9, 3, 8);
  scenes[5].addAction("1", 13, 7, 9, 3, 8);
  scenes[5].addAction("2", 13, 12, 9, 3, 8);
  scenes[5].addAction("3", 25, 2, 9, 3, 8);
  scenes[5].addAction("4", 25, 7, 9, 3, 8);
  scenes[5].addAction("5", 25, 12, 9, 3, 8);
  scenes[5].addAction("6", 37, 2, 9, 3, 8);
  scenes[5].addAction("7", 37, 7, 9, 3, 8);
  scenes[5].addAction("8", 37, 12, 9, 3, 8);
  scenes[5].addAction("9", 48, 12, 9, 3, 8);
  scenes[6] = new Scene("speech.txt", 6);
  scenes[6].addAction("do this", 3, 3, 30, 2, 14);
  scenes[6].addAction("do this", 3, 6, 30, 1, 18);
  scenes[6].addAction("do this", 3, 8, 30, 1, 19);
  scenes[6].addAction("do this", 3, 10, 30, 1, 13);
  scenes[6].addAction("do this", 3, 12, 30, 1, 20);
  scenes[7] = new Scene("night.txt", 7);
  scenes[7].addAction("turn on the light", 7, 5, 7, 2, 16);
  scenes[8] = new Scene("jail.txt", 8);
  scenes[9] = new Scene("deadDeath.txt", 9);
  scenes[10] = new Scene("street2.txt", 10);
  scenes[10].addAction("enter the bank", 26, 12, 2, 2, 6);
  scenes[10].addAction("run", 1, 14, 62, 3, 22);
  scenes[10].addAction("shoot the policeman", 38, 10, 6, 4, 9);
  scenes[10].addAction("speak", 50, 11, 1, 1, 12);
  scenes[11] = new Scene("joheyFront.txt", 11);
  scenes[11].addAction("run", 1, 14, 62, 3, 23);
  scenes[11].addAction("enter the arm dealer shop", 40, 12, 4, 2, 25);
  scenes[11].addAction("shoot the policeman", 3, 10, 6, 4, 9);
  scenes[11].addAction("speak", 15, 11, 1, 1, 12);
  scenes[12] = new Scene("streetLoop.txt", 12);
  scenes[12].addAction("run", 1, 14, 62, 3, 24);
  scenes[12].addAction("shoot the policeman", 6, 10, 6, 4, 9);
  scenes[12].addAction("speak", 18, 11, 1, 1, 12);
  scenes[13] = new Scene("joheyInt.txt", 13);
  scenes[13].addAction("back to the street", 1, 10, 3, 4, 22);
  scenes[13].addAction("shoot the policeman", 8, 10, 6, 4, 9);
  scenes[13].addAction("speak", 24, 11, 1, 1, 12);
  scenes[13].addAction("buy the torch", 35, 11, 1, 1, 32);
  scenes[13].addAction("buy the fishing hook", 38, 11, 1, 1, 33);
  scenes[13].addAction("buy a bigger gun", 41, 11, 1, 1, 34);
  scenes[13].addAction("speak to the merchant", 53, 11, 2, 3, 26);
  scenes[14] = new Scene("speech2.txt", 14);
  scenes[14].addAction("say this", 3, 3, 30, 1, 39);
  scenes[14].addAction("say this", 3, 5, 30, 2, 38);
  scenes[14].addAction("say this", 3, 8, 30, 1, 27);
  scenes[15] = new Scene("safe.txt", 15);
  scenes[15].addAction("pull the ladder", 35, 8, 10, 6, 29);
  scenes[15].addAction("go back to the main room", 1, 10, 5, 4, 6);
  scenes[16] = new Scene("upThere.txt", 16);
  scenes[16].addAction("burn the wire", 17, 3, 13, 3, 36);
  scenes[16].addAction("go back down", 37, 14, 10, 3, 6);
  scenes[17] = new Scene("tunnel.txt", 17);
  scenes[17].addAction("go further in the tunnel", 1, 1, 60, 15, 37);
  scenes[18] = new Scene("roof.txt", 18);
  scenes[19] = new Scene("policeHead.txt", 19);
  scenes[19].addAction("right eye", 21, 10, 1, 1, 40);
  scenes[19].addAction("left eye", 32, 10, 1, 1, 40);
  scenes[19].addAction("nose", 26, 11, 1, 1, 40);
  scenes[19].addAction("name", 23, 2, 9, 1, 40);
  scenes[19].addAction("medal of honor", 23, 3, 9, 3, 40);
  scenes[19].addAction("cap", 7, 1, 16, 4, 40);
  scenes[19].addAction("cap", 32, 1, 16, 4, 40);
  scenes[19].addAction("neck", 21, 15, 13, 2, 40);
  scenes[19].addAction("mouth", 23, 13, 9, 1, 40);
  scenes[19].addAction("right ear", 9, 9, 2, 3, 40);
  scenes[19].addAction("left ear", 44, 9, 2, 3, 40);
  scenes[19].addAction("somewhere else", 1, 5, 6, 10, 41);
  scenes[19].addAction("somewhere else", 49, 5, 6, 10, 41);
}

void setJsMousePressed(int button, int state) {
}

PVector mouse = new PVector(0, 0);
void setJsMouseMoved(int x, int y) {
  mouse.x=x;
  mouse.y=y;
}

void act(int a) {
  currentScene.actions.get(a).act();
}

int countdown = 0;
void countdownGoesOn() {
  countdown++;
  if (countdown>=10) {
    appendText("<br/>policeman : \"10... PAN !<br/>You die dead.");
    $("#retry").css("display", "block");
    moveToScene(9);
  } 
  else {
    appendText("<br/>policeman : \""+countdown+"\"");
  }
  if (dealerOnItsWay>0) dealerOnItsWay++;
  if (dealerOnItsWay==4) {
    Action thisAction = new Action("dealer arrives", -1, -1, 0, 0, 30);
    thisAction.act();
  }
}

void policemanFollower() {
  if (policemanFollow==0) updateText("the policeman follows you");
  if (policemanFollow==1) updateText("the policeman is still there with out");
  if (policemanFollow==4) updateText("it seems the policeman will never leave out alone");
  if (policemanFollow==7) updateText("the policeman still follows you wherever you go, that's a bit awkward");
  policemanFollow++;
}

void updateText(String text) {
  currentText="";
  idealText=text;
}

void appendText(String text) {
  idealText=idealText+text;
}

void moveToScene(int s) {
  currentScene=scenes[s];
  updateScreen();
}

void animate() {
  if (currentScene.id==18) {
    Action thisAnimation = new Action("roof animation", -1, -1, 0, 0, 43);
    thisAnimation.act();
  }
  if (currentScene.id==19) {
    Action thisAnimation = new Action("policeman animation", -1, -1, 0, 0, 42);
    thisAnimation.act();
  }
}


