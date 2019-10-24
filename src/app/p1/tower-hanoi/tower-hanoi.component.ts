import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-tower-hanoi',
  templateUrl: './tower-hanoi.component.html',
  styleUrls: ['./tower-hanoi.component.css']
})
export class TowerHanoiComponent implements OnInit {
  disk_1: any = null;
  disk_1_mover: any = null;
  disk_1_top = 180;;
  disk_1_left = 115;
  disk_timeout: number = 1;

  disk_2: any = null;
  disk_2_mover: any = null;
  disk_2_top:number = 180;
  disk_2_left: number = 100;

  disk_2: any = null;
  disk_3_mover: any = null;
  disk_3_top: number = 180;
  disk_3_left: number = 90;


  constructor() { }

  ngOnInit() {

  }

  playGame(): void {
    console.log('Ready to play');
    $(document).ready(() => {
      this.disk_1 = $('#disk-1');
      this.disk_2 = $('#disk-2');
      this.disk_3 = $('#disk-3');
       this.disk_1_mover = setInterval(() => {
         if(this.disk_1_top >= 30) {
           this.disk_1.css({
             top: this.disk_1_top
           });
         } else {
           clearInterval(this.disk_1_mover);
           // Time to move disk-1 to left now
           this.disk_1_mover = setInterval(() => {
             if(this.disk_1_left <= 655){
               this.disk_1.css({
                 left: this.disk_1_left
               });
             } else {
               clearInterval(this.disk_1_mover);
               // Move disk 1 down
               this.disk_1_mover = setInterval(() => {
                if(this.disk_1_top <= 220) {
                  this.disk_1.css({
                    top: this.disk_1_top
                  });
                } else {
                  clearInterval(this.disk_1_mover);
                  // Start moving disk 2
                  this.disk_2_mover = setInterval(() => {
                    if(this.disk_2_top >= 15) {
                      this.disk_2.css({
                        top: this.disk_2_top
                      });
                    } else {
                      clearInterval(this.disk_2_mover);
                      // Move disk 2 to disk_1_left
                      this.disk_2_mover = setInterval(() => {
                        if(this.disk_2_left <= 360) {
                          this.disk_2.css({
                            left: this.disk_2_left
                          });
                        } else {
                          clearInterval(this.disk_2_mover);
                          // move disk 2 down now on pole 2
                          this.disk_2_mover = setInterval(() => {
                            if(this.disk_2_top <= 200) {
                              this.disk_2.css({
                                top: this.disk_2_top
                              });
                            } else {
                              clearInterval(this.disk_2_mover);
                              // move disk 1 to pole 2
                              this.disk_1_mover = setInterval(() => {
                                if(this.disk_1_top >= 20) {
                                  this.disk_1.css({ top: this.disk_1_top});
                                } else {
                                  clearInterval(this.disk_1_mover);
                                  //  move disk 1 disk_1_left
                                  this.disk_1_mover = setInterval(() => {
                                    if(this.disk_1_left >= 380) {
                                      this.disk_1.css({ left: this.disk_1_left})
                                    } else {
                                      clearInterval(this.disk_1_mover);
                                      //  move disk 1 down
                                      this.disk_1_mover = setInterval(() => {
                                        if(this.disk_1_top <= 200) {
                                          this.disk_1.css({ top: this.disk_1_top})
                                        } else {
                                          clearInterval(this.disk_1_mover);
                                          // move big disk
                                          this.disk_3_mover = setInterval(() => {
                                            if(this.disk_3_top >= -10) {
                                              this.disk_3.css({
                                                top: this.disk_3_top
                                              });
                                            } else {
                                              clearInterval(this.disk_3_mover);
// move disk 3 right
this.disk_3_mover = setInterval(() => {
  if(this.disk_3_left <= 625) {
    this.disk_3.css({
      left: this.disk_3_left
    })
  } else {
    clearInterval(this.disk_3_mover);
    // move disk 3 down
    this.disk_3_mover = setInterval(() => {
      if(this.disk_3_top <= 180) {
        this.disk_3.css({
          top: this.disk_3_top
        })
      } else {
        clearInterval(this.disk_3_mover);
        // move disk 1
        this.disk_1_mover = setInterval(() => {
          if(this.disk_1_top >= 10) {
            this.disk_1.css({
              top: this.disk_1_top
            })
          } else {
            clearInterval(this.disk_1_mover);
            this.disk_1_mover = setInterval(() => {
              if(this.disk_1_left >= 115) {
                this.disk_1.css({
                  left: this.disk_1_left
                })
              } else {
                clearInterval(this.disk_1_mover);
                this.disk_1_mover = setInterval(() => {
                  if(this.disk_1_top <= 220) {
                    this.disk_1.css({
                      top: this.disk_1_top
                    });
                  } else {
                    clearInterval(this.disk_1_mover);
                    this.disk_2_mover = setInterval(() => {
                      if(this.disk_2_top >= 0 ) {
                        this.disk_2.css({
                          top: this.disk_2_top
                        });
                      } else {
                        clearInterval(this.disk_2_mover);
                        // move disk_1_left
                        this.disk_2_mover = setInterval(() => {
                          if(this.disk_2_left <= 635) {
                            this.disk_2.css({
                              left: this.disk_2_left
                            });
                          } else {
                            clearInterval(this.disk_2_mover);
                            // disk get down
                            this.disk_2_mover = setInterval(() => {
                              if(this.disk_2_top <= 180) {
                                this.disk_2.css({
                                  top: this.disk_2_top
                                });
                              } else {
                                clearInterval(this.disk_2_mover);
                                // time for disk 1
                                this.disk_1_mover = setInterval(() => {
                                  if(this.disk_1_top >= 30) {
                                    this.disk_1.css({
                                      top: this.disk_1_top
                                    })
                                  } else {
                                    clearInterval(this.disk_1_mover);
                                    // left
                                    this.disk_1_mover = setInterval(() => {
                                      if(this.disk_1_left <= 655) {
                                        this.disk_1.css({
                                          left: this.disk_1_left
                                        });
                                      } else {
                                        clearInterval(this.disk_1_mover);
                                        // move down
                                        this.disk_1_mover = setInterval(() => {
                                          if(this.disk_1_top <= 180) {
                                            this.disk_1.css({
                                              top: this.disk_1_top
                                            });
                                          } else {
                                            clearInterval(this.disk_1_mover);
                                            console.log('Won')
                                          }
                                          this.disk_1_top++;
                                        }, this.disk_timeout);
                                      }
                                      this.disk_1_left++;
                                    }, this.disk_timeout);
                                  }
                                  this.disk_1_top--;
                                }, this.disk_timeout);
                              }
                              this.disk_2_top++;
                            }, this.disk_timeout);
                          }
                          this.disk_2_left++;
                        }, this.disk_timeout);
                      }
                      this.disk_2_top--;
                    }, this.disk_timeout);
                  }
                  this.disk_1_top++;
                }, this.disk_timeout);
              }
              this.disk_1_left--;
            }, this.disk_timeout);
          }
          this.disk_1_top--;
        }, this.disk_timeout);
      }
      this.disk_3_top++;
    }, this.disk_timeout);
  }
  this.disk_3_left++;
}, this.disk_timeout);
                                            }
                                            this.disk_3_top--;
                                          }, this.disk_timeout);
                                        }
                                        this.disk_1_top++;
                                      }, this.disk_timeout);
                                    }
                                    this.disk_1_left--;
                                  }, this.disk_timeout);
                                }
                                this.disk_1_top--;
                              }, this.disk_timeout);
                            }
                            this.disk_2_top++;
                          }, this.disk_timeout);
                        }
                        this.disk_2_left++;
                      }, this.disk_timeout);
                    }
                    this.disk_2_top--;
                  }, this.disk_timeout);
                }
                this.disk_1_top++;
               }, this.disk_timeout);
             }
             this.disk_1_left++;
           }, this.disk_timeout);
         }
         this.disk_1_top--;
      }, this.disk_timeout);

    });
  }

  pauseGame(): void {
    clearInterval(this.disk_1_mover);
    clearInterval(this.disk_2_mover);
    clearInterval(this.disk_3_mover);
  }

  resetGame(): void {
    this.disk_1_top = 180;
    this.disk_1_left = 115;
    this.disk_2_top = 180;
    this.disk_2_left = 100;
    this.disk_3_top= 180;
    this.disk_3_left= 90;
    this.disk_1.css({
      top: 180,
      left: 115,
    });
    this.disk_2.css({
      top: 180,
      left: 100
    });
    this.disk_3.css({
      top: 180,
      left: 90
    });
  }
}
