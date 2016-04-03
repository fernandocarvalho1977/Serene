﻿using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Serene.Membership
{
    public partial class ForgotPasswordPanelAttribute : CustomEditorAttribute
    {
        public const string Key = "Serene.Membership.ForgotPasswordPanel";

        public ForgotPasswordPanelAttribute()
            : base(Key)
        {
        }
    }
}

