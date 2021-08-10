import React from "react";
import "./ContactCard.css";

function ContactCard() {
  return (
    <div class="wrapper">
      <div class="contact-card mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title mdl-card--expand">
          <h2 class="mdl-card__title-text">Cyberwort Software</h2>
          <i class="material-icons">message</i>
        </div>
        <div class="mdl-card__menu">
          <button class="mdl-button mdl-button--icon">
            <i class="material-icons">star</i>
          </button>
          <button class="mdl-button mdl-button--icon">
            <i class="material-icons">edit</i>
          </button>
          <button class="mdl-button mdl-button--icon">
            <i class="material-icons">more_vert</i>
          </button>
        </div>
        <div class="mdl-card__supporting-text">
          <ul class="mdl-list">
            <li class="mdl-list__item mdl-list__item--two-line">
              <span class="mdl-list__item-primary-content">
                <i class="material-icons mdl-list__item-icon">phone</i>
                01538945216
                <span class="mdl-list__item-sub-title">Mobile</span>
              </span>
            </li>
            <div class="mdl-menu__item--full-bleed-divider"></div>
            <li class="mdl-list__item mdl-list__item--two-line">
              <span class="mdl-list__item-primary-content">
                <i class="material-icons mdl-list__item-icon">email</i>
                cyberwort@gmail.com
                <span class="mdl-list__item-sub-title">Business</span>
              </span>
            </li>

            <div class="mdl-menu__item--full-bleed-divider"></div>
            <li class="mdl-list__item mdl-list__item--two-line">
              <span class="mdl-list__item-primary-content">
                <i class="material-icons mdl-list__item-icon">place</i>
                14/A Dhanmondi, Dhaka
                <span class="mdl-list__item-sub-title">Office</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
