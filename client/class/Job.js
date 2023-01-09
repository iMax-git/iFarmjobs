class Job{
    constructor(name, location, salary,animation, animation2,tool, blip_sprite, blip_color, marker_type, marker_color){
        this.name = name;
        this.location = location;
        this.salary = salary;
        this.animation = animation;
        this.animation2 = animation2;
        this.tool = tool;
        this.blip_sprite = blip_sprite;
        this.blip_color = blip_color;
        this.marker_type = marker_type;
        this.marker_color = marker_color;
    }

    async init(){
        this.blip = AddBlipForCoord(this.location[0], this.location[1], this.location[2]);
        SetBlipSprite(this.blip, this.blip_sprite);
        SetBlipColour(this.blip, this.blip_color);
        SetBlipAsShortRange(this.blip, true);
        BeginTextCommandSetBlipName("STRING");
        AddTextComponentString(this.name);
        EndTextCommandSetBlipName(this.blip);
        
        while(true){
            var pDist = Tools.distance(GetEntityCoords(PlayerPedId()), this.location);
            if(pDist < 2){
                await Tools.Wait(1);
                DrawMarker(0, this.location[0], this.location[1], this.location[2], 0, 0, 0, 0, 0, 0, 1.0, 1.0, 1.0, this.marker_color[0], this.marker_color[1], this.marker_color[2], this.marker_color[3], false, true, 2, false, false, false, false);
                Tools.HelpNotification("Appuyez sur ~INPUT_PICKUP~ pour travailler.");
                if(IsControlJustPressed(0, 38)){
                    if (this.animation != null && this.animation2 != null){
                        RequestAnimDict(this.animation);
                        while(!HasAnimDictLoaded(this.animation)){
                            await Tools.Wait(100);
                        }
                    }
                    if (this.tool != null){
                        RequestModel(GetHashKey(this.tool));
                        while(!HasModelLoaded(GetHashKey(this.tool))){
                            await Tools.Wait(100);
                        }
                    }
                    TaskPlayAnim(PlayerPedId(), this.animation, this.animation2, 12, 12, -1, 80, 0, false,false,false);
                    var tool = CreateObject(GetHashKey(this.tool), 0,0,0, true, true, true);
                    AttachEntityToEntity(tool, PlayerPedId(), GetPedBoneIndex(PlayerPedId(), 57005), 0.18, -0.02, -0.02, 350.0, 100.00, 140.0, true, true, false, true, 1, true)
                    await Tools.Wait(1000* Config.Worktime);
                    DeleteObject(tool);
                    ClearPedTasks(PlayerPedId());
                    var salaire = Math.floor(Math.random() * (this.salary[1] - this.salary[0] + 1)) + this.salary[0];
                    Tools.Notification("Vous avez gagné ~g~"+salaire+"$~s~.");
                    TriggerServerEvent("iFarmjobs:pay", salaire);
                }
            } else if(pDist < 10){
                await Tools.Wait(1);
                DrawMarker(this.marker_type, this.location[0], this.location[1], this.location[2], 0, 0, 0, 0, 0, 0, 1.0, 1.0, 1.0,  this.marker_color[0], this.marker_color[1], this.marker_color[2], this.marker_color[3], false, false, 2, false, false, false, false);
            }else if(pDist < 50){
                await Tools.Wait(2000);
            } else if(pDist < 100){
                await Tools.Wait(10000);
            } else {
                await Tools.Wait(20000);
            }

        }
    }
}